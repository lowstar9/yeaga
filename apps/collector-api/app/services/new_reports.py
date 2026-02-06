from __future__ import annotations

from dataclasses import dataclass
from datetime import datetime, timedelta

from sqlalchemy.orm import Session

import logging
import re

from app.core.config import settings
from sqlalchemy.dialects.postgresql import insert

from app.models import Company, IngestJob

logger = logging.getLogger(__name__)




@dataclass
class NewReportItem:
    company_id: int
    ticker: str
    name: str
    fiscal_year: int
    fiscal_month: int
    reprt_code: str
    report_date: str


def _get_dart_client():
    # Lazy import to avoid dependency errors during non-DART flows.
    import OpenDartReader as dart

    return dart(settings.opendart_api_key)


REPORT_CODE_GROUPS = {
    "11011": "annual",
    "11012": "half",
    "11013": "quarter",
    "11014": "quarter",
}

# 보고서 이름에서 보고서코드, 년도, 월 얻기
def _parse_reprt_info_from_name(
    name: str,
) -> tuple[str | None, int | None, int | None]:
    pattern = re.compile(r"^.+\s\((\d{4})\.(\d{2})\)$")
    match = pattern.match(name)

    if not match:
        return None
    
    fiscal_year = int(match.group(1))
    fiscal_month = int(match.group(2))
    reprt_code = ''

    # Derive reprt_code from report name and issued month.
    if "사업보고서" in name:
        reprt_code = "11011"
    if "반기보고서" in name:
        reprt_code = "11012"
    if "분기보고서" in name and fiscal_month:
        # 월/3 기준으로 보고서 코드를 추정한다.
        # 1 -> 1분기(11013), 2 -> 반기(11012), 3 -> 3분기(11014), 4 -> 사업(11011)
        bucket = fiscal_month // 3
        reprt_code = {
            1: "11013",
            2: "11012",
            3: "11014",
            4: "11011",
        }.get(bucket)

    return reprt_code, fiscal_year, fiscal_month


def _corp_code_map(dart) -> dict[str, str]:
    # Build stock_code -> corp_code map from DART corp codes list.
    corp_df = dart.corp_codes
    mapping: dict[str, str] = {}
    for _, row in corp_df.iterrows():
        stock_code = str(row.get("stock_code") or "").strip()
        corp_code = str(row.get("corp_code") or "").strip()
        if stock_code and corp_code:
            mapping[stock_code] = corp_code
    return mapping


def find_new_reports(
    db: Session, on_progress=None, days: int | None = None, should_cancel=None
) -> dict:
    """Find new reports from DART not yet queued in ingest_jobs."""
    dart = _get_dart_client()

    # Build corp_code map once per request.
    corp_map = _corp_code_map(dart)

    items: list[NewReportItem] = []
    # DEBUG: duplicate detection for items being added
    item_keys_seen: set[tuple[int, int, int]] = set()
    duplicate_item_keys: list[tuple[int, int, int]] = []
    summary = {"tickers": 0, "annual": 0, "half": 0, "quarter": 0}
    tickers_with_new: set[str] = set()

    companies = db.query(Company).filter(Company.state == "1").all()
    total = len(companies)
    processed = 0

    cancelled = False
    for company in companies:
        if should_cancel and should_cancel():
            cancelled = True
            break
        processed += 1
        corp_code = company.corp_code or corp_map.get(company.ticker)
        if not corp_code:
            continue

        # Persist corpCode for later calls.
        if company.corp_code != corp_code:
            company.corp_code = corp_code

        try:
        # dart.list(): DART 보고서의 목록을 DataFrame으로 반환
        # * corp: 종목코드 (고유번호, 법인명도 가능)
        # * start: 조회 시작일 (기본값: 1990-01-01')
        # * end: 조회 종료일 (기본값: 당일)
        # * kind: 보고서 종류:  A=정기공시, B=주요사항보고, C=발행공시, D=지분공시, E=기타공시, 
        #                                 F=외부감사관련, G=펀드공시, H=자산유동화, I=거래소공시, J=공정위공시
        # * final: 최종보고서 여부 (기본값: True)
            reports = dart.list(corp=corp_code, start="2025-01-01", kind='A') 
            logging.debug(f"{company.name} 보고서 조회 건수: {reports.shape[0]}")
        except Exception as e: 
            # Skip company on API error to avoid blocking the whole scan.
            #print(f"ERROR: {e}")
            logging.error(f"dart.list() 오류: {e}")
            continue

        # print(f"DEBUG: {corp_code}, reports count: {len(reports)}")

        added_for_company = False
        # Keep the earliest report per (fiscal_year, reprt_code) for this company.
        earliest_by_code: dict[tuple[int, str], dict] = {}

        for _, row in reports.iterrows():
            report_name = str(row.get("report_nm") or "")
            report_date = str(row.get("rcept_dt") or "")

            parsed = _parse_reprt_info_from_name(report_name)
            if not parsed:
                logger.debug(
                    "skip report without parsable report_nm: company=%s (%s) report_nm=%s",
                    company.ticker,
                    company.name,
                    report_name,
                )
                continue
            reprt_code, fiscal_year, fiscal_month = parsed
            
            if not fiscal_month:
                if report_date and len(report_date) >= 6:
                    fiscal_month = int(report_date[4:6])
                else:
                    fiscal_month = datetime.now().month
                    logger.debug(
                        "report_date missing or invalid, defaulting fiscal_month: company=%s (%s) report_nm=%s",
                        company.ticker,
                        company.name,
                        report_name,
                    )
            
            if not reprt_code or reprt_code not in REPORT_CODE_GROUPS:
                logger.debug(
                    "skip report with unknown reprt_code: company=%s (%s) report_nm=%s fiscal_month=%s",
                    company.ticker,
                    company.name,
                    report_name,
                    fiscal_month,
                )
                continue

            # NOTE:
            # dart.list()에는 별도/연결 구분(fs_div)이 없으므로
            # 이 단계에서 fs_type을 확정하지 않는다.

            key = (fiscal_year, reprt_code)
            existing = earliest_by_code.get(key)
            if existing:
                if report_date and existing["report_date"] and report_date < existing["report_date"]:
                    logger.info(
                        "replace duplicate report in same year/code: company=%s (%s) prev_nm=%s prev_date=%s new_nm=%s new_date=%s reprt_code=%s",
                        company.ticker,
                        company.name,
                        existing["report_name"],
                        existing["report_date"],
                        report_name,
                        report_date,
                        reprt_code,
                    )
                    earliest_by_code[key] = {
                        "reprt_code": reprt_code,
                        "report_date": report_date,
                        "report_name": report_name,
                        "fiscal_year": fiscal_year,
                        "fiscal_month": fiscal_month,
                    }
                else:
                    logger.info(
                        "drop duplicate report in same year/code: company=%s (%s) report_nm=%s reprt_code=%s report_date=%s",
                        company.ticker,
                        company.name,
                        report_name,
                        reprt_code,
                        report_date,
                    )
                continue

            earliest_by_code[key] = {
                "reprt_code": reprt_code,
                "report_date": report_date,
                "report_name": report_name,
                "fiscal_year": fiscal_year,
                "fiscal_month": fiscal_month,
            }

        for payload in earliest_by_code.values():
            reprt_code = payload["reprt_code"]
            report_date = payload["report_date"]
            fiscal_year = payload["fiscal_year"]
            fiscal_month = payload["fiscal_month"]

            # Skip if a job already exists for this company/year/fiscal_month.
            exists = (
                db.query(IngestJob)
                .filter(
                    IngestJob.company_id == company.id,
                    IngestJob.fiscal_year == fiscal_year,
                    IngestJob.fiscal_month == fiscal_month,
                )
                .first()
            )
            if exists:
                continue

            item_key = (company.id, fiscal_year, fiscal_month)
            if item_key in item_keys_seen:
                duplicate_item_keys.append(item_key)
                logger.debug(
                    "duplicate item detected: company_id=%s fiscal_year=%s fiscal_month=%s",
                    company.id,
                    fiscal_year,
                    fiscal_month,
                )
            else:
                item_keys_seen.add(item_key)

            items.append(
                NewReportItem(
                    company_id=company.id,
                    ticker=company.ticker,
                    name=company.name,
                    fiscal_year=fiscal_year,
                    fiscal_month=fiscal_month,
                    reprt_code=reprt_code,
                    report_date=report_date,
                )
            )
            added_for_company = True

            group = REPORT_CODE_GROUPS[reprt_code]
            summary[group] += 1
        if added_for_company:
            tickers_with_new.add(company.ticker)

        # Emit progress after each company.
        if on_progress:
            percent = (processed / total * 100) if total else 100
            on_progress(
                {
                    "processed": processed,
                    "total": total,
                    "percent": round(percent, 2),
                    "current": f"{company.ticker} {company.name}",
                }
            )

    if duplicate_item_keys:
        logger.debug(
            "duplicate items summary: total=%s unique=%s duplicates=%s",
            len(items),
            len(item_keys_seen),
            len(duplicate_item_keys),
        )

    db.commit()

    summary["tickers"] = len(tickers_with_new)
    return {
        "summary": summary,
        "items": [item.__dict__ for item in items],
        "cancelled": cancelled,
    }


def enqueue_new_reports(db: Session, on_progress=None) -> dict:
    """Scan and enqueue new report items into IngestJob."""
    result = find_new_reports(db, on_progress=on_progress)
    items = result["items"]
    if not items:
        return {"summary": result["summary"], "created": 0}

    jobs = [
        IngestJob(
            company_id=item["company_id"],
            fiscal_year=item["fiscal_year"],
            fiscal_month=item["fiscal_month"],
            reprt_code=item["reprt_code"],
        )
        for item in items
    ]
    db.add_all(jobs)
    db.commit()
    return {"summary": result["summary"], "created": len(jobs)}


def enqueue_report_items(db: Session, items: list[dict]) -> int:
    """Enqueue provided report items into IngestJob."""
    if not items:
        return 0
    seen: set[tuple[int, int, int]] = set()
    rows: list[dict] = []
    for item in items:
        key = (item["company_id"], item["fiscal_year"], item["fiscal_month"])
        if key in seen:
            continue
        seen.add(key)
        rows.append(
            {
                "companyId": item["company_id"],
                "fiscalYear": item["fiscal_year"],
                "fiscalMonth": item["fiscal_month"],
                "reprtCode": item["reprt_code"],
            }
        )
    if not rows:
        return 0
    stmt = insert(IngestJob).values(rows)
    stmt = stmt.on_conflict_do_nothing(
        index_elements=["companyId", "fiscalYear", "fiscalMonth"]
    )
    result = db.execute(stmt)
    db.commit()
    return result.rowcount or 0
logger = logging.getLogger(__name__)
