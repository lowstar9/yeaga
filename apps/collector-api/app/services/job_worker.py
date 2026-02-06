from sqlalchemy.orm import Session

from app.dao.ingest_job import acquire_next_job, mark_job_done, mark_job_failed


def run_once(db: Session) -> dict:
    """Run a single job from the queue and return status for API usage."""
    # Acquire job with DB lock to prevent duplicate processing.
    job = acquire_next_job(db)
    if not job:
        return {"status": "idle"}

    try:
        # TODO: integrate financial ingestion pipeline here.
        # NOTE: fs_div(CFS/OFS)는 dart.finstate() 결과에서만 확정되므로
        # FinancialItem.fsType은 재무제표 수집 단계에서 채워야 한다.
        # For now, mark as done after successful acquisition.
        mark_job_done(db, job["id"])
        return {"status": "done", "job": job}
    except Exception as exc:  # noqa: BLE001 - bubble up error details for now
        mark_job_failed(db, job["id"], str(exc))
        return {"status": "failed", "job": job, "error": str(exc)}
