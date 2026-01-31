from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import text
from sqlalchemy.orm import Session

from app.core.db import get_db
from app.dao.company import (
    create_company,
    get_company_by_ticker,
    list_companies,
    list_sectors,
    search_companies,
)
from app.api.schemas import CompanyCreate, CompanyListOut, CompanyOut
from app.services.company_sync import sync_companies, update_market_caps

router = APIRouter()


@router.get("/health")
def health_check(db: Session = Depends(get_db)):
    db.execute(text("SELECT 1"))
    return {"status": "ok"}


@router.post("/ingest/start")
def start_ingest():
    return {"status": "started"}


@router.post("/ingest/stop")
def stop_ingest():
    return {"status": "stopped"}


@router.get("/ingest/status")
def ingest_status():
    return {"status": "idle"}


@router.get("/companies/sectors")
def list_company_sectors(
    market: str | None = None,
    db: Session = Depends(get_db),
):
    # Static path must be declared before /companies/{ticker} to avoid route shadowing.
    return {"items": list_sectors(db, market=market)}


@router.get("/companies/{ticker}", response_model=CompanyOut)
def get_company(ticker: str, db: Session = Depends(get_db)):
    company = get_company_by_ticker(db, ticker)
    if not company:
        raise HTTPException(status_code=404, detail="company not found")
    return company


@router.post("/companies", response_model=CompanyOut)
def create_company_route(payload: CompanyCreate, db: Session = Depends(get_db)):
    existing = get_company_by_ticker(db, payload.ticker)
    if existing:
        raise HTTPException(status_code=409, detail="company already exists")
    return create_company(
        db,
        ticker=payload.ticker,
        name=payload.name,
        market=payload.market,
        sector=payload.sector,
    )


@router.get("/companies", response_model=CompanyListOut)
def list_companies_route(
    market: str | None = None,
    name: str | None = None,
    ticker: str | None = None,
    sector: str | None = None,
    state: str | None = None,
    limit: int = 50,
    offset: int = 0,
    db: Session = Depends(get_db),
):
    # Search with filters + pagination.
    items, total = search_companies(
        db,
        market=market,
        name=name,
        ticker=ticker,
        sector=sector,
        state=state,
        limit=limit,
        offset=offset,
    )
    return {"items": items, "total": total}


@router.post("/companies/sync")
def sync_companies_route(db: Session = Depends(get_db)):
    result = sync_companies(db)
    return {
        "added": result.added,
        "updated": result.updated,
        "delisted": result.delisted,
        # Include market cap refresh count for UI feedback.
        "market_cap_updated": result.market_cap_updated,
    }


@router.post("/companies/market-cap/update")
def update_market_cap_route(db: Session = Depends(get_db)):
    # Dedicated endpoint for scheduled market cap refresh.
    updated = update_market_caps(db)
    return {"updated": updated}
