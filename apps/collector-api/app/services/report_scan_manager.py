import asyncio
import uuid
from dataclasses import dataclass, field
from typing import Any

from fastapi import WebSocket
import logging


@dataclass
class ScanState:
    # Track progress and summary for a scan job.
    total: int = 0
    processed: int = 0
    percent: float = 0.0
    current: str = ""
    summary: dict[str, int] = field(default_factory=lambda: {"tickers": 0, "annual": 0, "half": 0, "quarter": 0})
    cancelled: bool = False


class ReportScanManager:
    """In-memory manager for report scan jobs and websocket subscribers."""

    def __init__(self) -> None:
        self._states: dict[str, ScanState] = {}
        self._sockets: dict[str, set[WebSocket]] = {}
        self._lock = asyncio.Lock()

    async def create_job(self) -> str:
        # Create a new job id with empty state.
        job_id = str(uuid.uuid4())
        async with self._lock:
            self._states[job_id] = ScanState()
            self._sockets[job_id] = set()
        return job_id

    async def attach(self, job_id: str, ws: WebSocket) -> None:
        # Register websocket subscriber for a job.
        async with self._lock:
            self._sockets.setdefault(job_id, set()).add(ws)

    async def detach(self, job_id: str, ws: WebSocket) -> None:
        # Remove websocket subscriber.
        async with self._lock:
            if job_id in self._sockets:
                self._sockets[job_id].discard(ws)

    async def update_state(self, job_id: str, payload: dict[str, Any]) -> None:
        # Update state and broadcast progress from a payload dict.
        async with self._lock:
            state = self._states.setdefault(job_id, ScanState())
            for key, value in payload.items():
                setattr(state, key, value)
            message = {
                "type": "progress",
                "processed": state.processed,
                "total": state.total,
                "percent": state.percent,
                "current": state.current,
            }
        await self.broadcast(job_id, message)

    async def broadcast(self, job_id: str, payload: dict) -> None:
        # Send payload to all connected websockets.
        sockets = list(self._sockets.get(job_id, set()))
        for ws in sockets:
            try:
                await ws.send_json(payload)
            except Exception as e:
                # Ignore broken sockets; cleanup on next detach.
                logging.error(f"broadcast(): {str(e)}")
                pass

    async def complete(
        self, job_id: str, summary: dict[str, int], items: list[dict] | None = None
    ) -> None:
        # Mark job done and broadcast summary and items.
        async with self._lock:
            state = self._states.setdefault(job_id, ScanState())
            state.summary = summary
        payload = {"type": "done", "summary": summary, "items": items or []}
        await self.broadcast(job_id, payload)

    async def error(self, job_id: str, message: str) -> None:
        # Broadcast error to subscribers.
        await self.broadcast(job_id, {"type": "error", "message": message})

    async def cancel(self, job_id: str) -> None:
        # Mark a scan job as cancelled.
        async with self._lock:
            state = self._states.setdefault(job_id, ScanState())
            state.cancelled = True

    async def is_cancelled(self, job_id: str) -> bool:
        async with self._lock:
            state = self._states.get(job_id)
            return bool(state and state.cancelled)


scan_manager = ReportScanManager()
