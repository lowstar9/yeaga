from sqlalchemy import select, func
from sqlalchemy.orm import Session

from app.models import Company


def get_company_by_ticker(db: Session, ticker: str) -> Company | None:
    return db.query(Company).filter(Company.ticker == ticker).one_or_none()


def create_company(
    db: Session,
    *,
    ticker: str,
    name: str,
    market: str,
    sector: str | None = None,
) -> Company:
    company = Company(ticker=ticker, name=name, market=market, sector=sector)
    db.add(company)
    db.commit()
    db.refresh(company)
    return company


def list_companies(db: Session, limit: int = 50, offset: int = 0) -> list[Company]:
    # Legacy list (no filters) kept for compatibility.
    return (
        db.query(Company)
        .order_by(Company.market_cap.desc().nullslast(), Company.ticker.asc())
        .limit(limit)
        .offset(offset)
        .all()
    )


def search_companies(
    db: Session,
    *,
    market: str | None = None,
    name: str | None = None,
    ticker: str | None = None,
    sector: str | None = None,
    state: str | None = None,
    limit: int = 50,
    offset: int = 0,
) -> tuple[list[Company], int]:
    # Build filtered query for pagination.
    query = db.query(Company)
    if market:
        query = query.filter(Company.market == market)
    if name:
        query = query.filter(Company.name.ilike(f"%{name}%"))
    if ticker:
        query = query.filter(Company.ticker == ticker)
    if sector:
        query = query.filter(Company.sector == sector)
    if state:
        query = query.filter(Company.state == state)

    total = query.count()
    items = (
        query.order_by(Company.market_cap.desc().nullslast(), Company.ticker.asc())
        .limit(limit)
        .offset(offset)
        .all()
    )
    return items, total


def list_sectors(db: Session, market: str | None = None) -> list[str]:
    # Return distinct sector names for filter dropdown.
    query = select(Company.sector).where(Company.sector.isnot(None))
    if market:
        query = query.where(Company.market == market)
    rows = db.execute(query.distinct().order_by(Company.sector.asc())).scalars().all()
    return list(rows)
