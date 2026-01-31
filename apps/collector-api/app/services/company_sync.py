from __future__ import annotations

from dataclasses import dataclass
from datetime import datetime, timedelta

import re

from pykrx import stock
from sqlalchemy.orm import Session

from app.models import Company


@dataclass
class SyncResult:
    added: int
    updated: int
    delisted: int
    market_cap_updated: int


def _today_yyyymmdd() -> str:
    # pykrx는 휴장일에 빈 결과를 반환할 수 있어 최근 영업일 기준 날짜를 사용한다.
    return stock.get_nearest_business_day_in_a_week()


def _fetch_market_tickers(market: str) -> list[str]:
    return stock.get_market_ticker_list(_today_yyyymmdd(), market=market)


def _is_sector_index(name: str) -> bool:
    # Filter out non-sector indices (style/size/derivative) to improve sector accuracy.
    if any(token in name for token in ["코스피", "코스닥", "KRX", "TOP", "배당", "가치", "성장"]):
        return False
    if re.search(r"\d", name):
        return False
    if any(token in name for token in ["레버리지", "인버스", "선물", "구성", "우선주", "스팩"]):
        return False
    return True


_SECTOR_CACHE: dict[str, object] = {"value": None, "expires_at": None}


def _build_sector_map() -> dict[str, str]:
    # Cache sector map for 24 hours to reduce KRX index calls.
    now = datetime.now()
    expires_at = _SECTOR_CACHE.get("expires_at")
    if expires_at and isinstance(expires_at, datetime) and expires_at > now:
        return _SECTOR_CACHE.get("value", {})  # type: ignore[return-value]

    sector_map: dict[str, str] = {}
    for market in ["KOSPI", "KOSDAQ"]:
        for idx in stock.get_index_ticker_list(market=market):
            name = stock.get_index_ticker_name(idx)
            # get_index_ticker_list() : 종목 종류에대한 인덱스 
            # get_index_ticker_name() : 종목 종류명
            # 종목 종류명을 얻어서 종목 업종만 필터링, 종목 업종 인덱스로 해당 업종에 해당하는 종목코드를 얻어
            # 업종맵을 구성한다.

            # index | name
            #------------
            # 1001 | 코스피
            # 1002 | 코스피 대형주
            # 1003 | 코스피 중형주
            # 1004 | 코스피 소형주
            # 1005 | 음식료·담배
            # 1006 | 섬유·의류
            # 1007 | 종이·목재
            # 1008 | 화학
            # 1009 | 제약
            # 1010 | 비금속
            # 1011 | 금속
            # 1012 | 기계·장비
            # 1013 | 전기전자
            # 1014 | 의료·정밀기기
            # ...

            if not _is_sector_index(name):
                continue            
            for ticker in stock.get_index_portfolio_deposit_file(idx):
                sector_map.setdefault(ticker, name)

    _SECTOR_CACHE["value"] = sector_map
    _SECTOR_CACHE["expires_at"] = now + timedelta(hours=24)
    return sector_map


def sync_companies(db: Session) -> SyncResult:
    tickers = {
        "KOSPI": _fetch_market_tickers("KOSPI"),
        "KOSDAQ": _fetch_market_tickers("KOSDAQ"),
    }
    sector_map = _build_sector_map()

    current = db.query(Company).all()
    by_ticker = {c.ticker: c for c in current}

    seen: set[str] = set()
    added = updated = 0

    for market, items in tickers.items():
        for ticker in items:
            seen.add(ticker)
            name = stock.get_market_ticker_name(ticker)
            existing = by_ticker.get(ticker)
            if not existing:
                sector = sector_map.get(ticker)
                db.add(
                    Company(
                        ticker=ticker,
                        name=name,
                        market=market,
                        state="1",
                        sector=sector,
                    )
                )
                added += 1
                continue

            changed = False
            if existing.name != name:
                existing.name = name
                changed = True
            if existing.market != market:
                existing.market = market
                changed = True
            sector = sector_map.get(ticker)
            if sector and existing.sector != sector:
                existing.sector = sector
                changed = True
            if existing.state != "1":
                existing.state = "1"
                changed = True
            if changed:
                updated += 1

    delisted = 0
    for company in current:
        if company.ticker not in seen and company.state != "0":
            company.state = "0"
            delisted += 1

    # Commit company metadata changes before market cap refresh.
    db.commit()
    market_cap_updated = update_market_caps(db)
    return SyncResult(
        added=added,
        updated=updated,
        delisted=delisted,
        market_cap_updated=market_cap_updated,
    )


def update_market_caps(db: Session) -> int:
    # Update market cap and timestamp for current listed companies.
    today = _today_yyyymmdd()
    updated = 0
    for market in ["KOSPI", "KOSDAQ"]:
        df = stock.get_market_cap(today, market=market)
        # DataFrame index is ticker; column "시가총액" holds market cap.
        for ticker, row in df.iterrows():
            cap = row.get("시가총액")
            if cap is None:
                continue
            company = db.query(Company).filter(Company.ticker == ticker).one_or_none()
            if not company:
                continue
            company.market_cap = int(cap)
            company.market_cap_at = datetime.now()
            updated += 1
    db.commit()
    return updated
