from sqlalchemy import text
from sqlalchemy.orm import Session


# Use SQL-level locking to safely acquire the next pending job.
ACQUIRE_JOB_SQL = """
WITH next_job AS (
  SELECT id
  FROM "IngestJob"
  WHERE status = 'pending'
  ORDER BY priority ASC, "createdAt" ASC
  FOR UPDATE SKIP LOCKED
  LIMIT 1
)
UPDATE "IngestJob"
SET status = 'running', "updatedAt" = now()
WHERE id IN (SELECT id FROM next_job)
RETURNING id, "companyId", "fiscalYear", "fiscalMonth", "reprtCode", status, priority, retries, "createdAt", "updatedAt";
"""


def acquire_next_job(db: Session) -> dict | None:
    """Atomically lock and claim the next pending job."""
    with db.begin():
        row = db.execute(text(ACQUIRE_JOB_SQL)).mappings().first()
    return dict(row) if row else None


def mark_job_done(db: Session, job_id: int) -> None:
    """Mark a job as done."""
    with db.begin():
        db.execute(
            text('UPDATE "IngestJob" SET status = \'done\', "updatedAt" = now() WHERE id = :id'),
            {"id": job_id},
        )


def mark_job_failed(db: Session, job_id: int, error_msg: str) -> None:
    """Mark a job as failed and increment retry count."""
    with db.begin():
        db.execute(
            text(
                """
                UPDATE "IngestJob"
                SET status = 'failed', retries = retries + 1, "lastErrorMsg" = :msg, "updatedAt" = now()
                WHERE id = :id
                """
            ),
            {"id": job_id, "msg": error_msg},
        )


def reset_stale_jobs(db: Session, minutes: int = 30) -> int:
    """Move stale running jobs back to pending for retry."""
    with db.begin():
        result = db.execute(
            text(
                """
                UPDATE "IngestJob"
                SET status = 'pending', "updatedAt" = now()
                WHERE status = 'running'
                  AND "updatedAt" < now() - (:minutes || ' minutes')::interval
                """
            ),
            {"minutes": minutes},
        )
    return result.rowcount or 0


def list_jobs(db: Session, limit: int = 100) -> list[dict]:
    """List recent jobs for UI/status endpoints."""
    rows = (
        db.execute(
            text(
                """
                SELECT j.id, j."companyId", j."fiscalYear", j."fiscalMonth", j."reprtCode", j.status, j.priority, j.retries,
                       j."createdAt", j."updatedAt", j."lastErrorMsg", c.ticker, c.name
                FROM "IngestJob" j
                JOIN "Company" c ON c.id = j."companyId"
                ORDER BY "createdAt" DESC
                LIMIT :limit
                """
            ),
            {"limit": limit},
        )
        .mappings()
        .all()
    )
    return [dict(r) for r in rows]
