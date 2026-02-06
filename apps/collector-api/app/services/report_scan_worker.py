import anyio

from app.core.db import SessionLocal
from app.services.new_reports import find_new_reports
from app.services.report_scan_manager import scan_manager


def _emit(job_id: str, payload: dict) -> None:
    # Bridge sync scan loop to async websocket broadcast.
    anyio.from_thread.run(scan_manager.update_state, job_id, payload)


def run_scan_job(job_id: str) -> None:
    """Run report scan job and push progress via websocket manager."""
    db = SessionLocal()
    try:
        def on_progress(payload: dict) -> None:
            _emit(job_id, payload)

        def should_cancel() -> bool:
            return anyio.from_thread.run(scan_manager.is_cancelled, job_id)

        result = find_new_reports(db, on_progress=on_progress, should_cancel=should_cancel)
        if result.get("cancelled"):
            anyio.from_thread.run(scan_manager.error, job_id, "검색이 중단되었습니다.")
            return
        anyio.from_thread.run(
            scan_manager.complete, job_id, result["summary"], result.get("items")
        )
    except Exception as exc:  # noqa: BLE001 - surface error message for UI
        anyio.from_thread.run(scan_manager.error, job_id, str(exc))
    finally:
        db.close()
