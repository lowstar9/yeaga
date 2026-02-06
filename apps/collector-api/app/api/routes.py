import anyio

from fastapi import APIRouter, BackgroundTasks, Depends, HTTPException, WebSocket, WebSocketDisconnect
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
from app.dao.ingest_job import list_jobs, reset_stale_jobs
from app.api.schemas import (
    CompanyCreate,
    CompanyListOut,
    CompanyOut,
    NewReportEnqueueRequest,
    NewReportEnqueueResponse,
)
from app.services.company_sync import sync_companies, update_market_caps
from app.services.job_worker import run_once
from app.services.new_reports import enqueue_report_items, enqueue_new_reports, find_new_reports
from app.services.report_scan_manager import scan_manager
from app.services.report_scan_worker import run_scan_job

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


@router.get("/jobs")
def list_jobs_route(limit: int = 100, db: Session = Depends(get_db)):
    # List recent jobs for monitoring.
    return {"items": list_jobs(db, limit=limit)}


@router.post("/jobs/run-once")
def run_one_job_route(db: Session = Depends(get_db)):
    # Execute a single job using SQL-level locking.
    return run_once(db)


@router.post("/jobs/reset-stale")
def reset_stale_jobs_route(minutes: int = 30, db: Session = Depends(get_db)):
    # Reset stale running jobs back to pending.
    return {"updated": reset_stale_jobs(db, minutes=minutes)}


@router.post("/jobs/add", response_model=NewReportEnqueueResponse)
def add_jobs_from_new_reports(payload: NewReportEnqueueRequest, db: Session = Depends(get_db)):
    # Enqueue provided report items into ingest job queue.
    created = enqueue_report_items(db, [item.dict() for item in payload.items])
    return {"summary": payload.summary, "created": created}


@router.get("/reports/new")
def get_new_reports(days: int = 30, db: Session = Depends(get_db)):
    # Scan DART for new reports not yet queued.
    return find_new_reports(db, days=days)


@router.post("/reports/new/start")
def start_new_reports_scan(background: BackgroundTasks):
    # Create a scan job and run in background.
    job_id = anyio.from_thread.run(scan_manager.create_job)
    background.add_task(run_scan_job, job_id)
    return {"job_id": job_id}


@router.websocket("/ws/reports/new/{job_id}")
async def ws_new_reports_progress(websocket: WebSocket, job_id: str):
    # WebSocket for progress updates.
    await websocket.accept()
    await scan_manager.attach(job_id, websocket)
    try:
        while True:
            message = await websocket.receive_text()
            if message == "stop":
                await scan_manager.cancel(job_id)
    except WebSocketDisconnect:
        pass
    finally:
        await scan_manager.detach(job_id, websocket)
