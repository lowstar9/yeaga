from __future__ import annotations

import os
import subprocess
from dataclasses import dataclass
from datetime import datetime
from pathlib import Path

from urllib.parse import urlparse

from app.core.config import ROOT_DIR, settings


# Backup artifacts live under repo root to keep deployments simple.
BACKUP_DIR = ROOT_DIR / "db_backup"
# Append-only log for backup/restore operations.
LOG_FILE = BACKUP_DIR / "backup.log"
# File-based lock to prevent concurrent backup/restore.
LOCK_FILE = BACKUP_DIR / ".lock"
# Docker container name running Postgres.
POSTGRES_CONTAINER = settings.postgres_container


@dataclass
class BackupMeta:
    file_name: str
    size: int
    created_at: str


def _ensure_backup_dir() -> None:
    # Ensure backup folder exists before any file I/O.
    BACKUP_DIR.mkdir(parents=True, exist_ok=True)


def _write_log(action: str, status: str, message: str, file_name: str | None = None) -> None:
    # Append a single line to the backup log file.
    _ensure_backup_dir()
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    file_part = f" file={file_name}" if file_name else ""
    LOG_FILE.write_text(
        LOG_FILE.read_text() + f"{timestamp} [{action}] {status}{file_part} {message}\n"
        if LOG_FILE.exists()
        else f"{timestamp} [{action}] {status}{file_part} {message}\n"
    )


def _acquire_lock() -> None:
    # Prevent concurrent backup/restore.
    _ensure_backup_dir()
    if LOCK_FILE.exists():
        raise RuntimeError("backup or restore already running")
    LOCK_FILE.write_text(str(os.getpid()))


def _release_lock() -> None:
    # Best-effort lock cleanup.
    if LOCK_FILE.exists():
        LOCK_FILE.unlink()


def _pg_env_from_url() -> dict[str, str]:
    # Convert DATABASE_URL into PG* env vars used by pg_dump/pg_restore.
    parsed = urlparse(settings.database_url)
    return {
        "PGHOST": parsed.hostname or "localhost",
        "PGPORT": str(parsed.port or 5432),
        "PGUSER": parsed.username or "",
        "PGPASSWORD": parsed.password or "",
        "PGDATABASE": (parsed.path or "").lstrip("/"),
    }


def _docker_pg_env() -> list[str]:
    # Build docker exec --env arguments.
    env = _pg_env_from_url()
    return [
        "--env",
        f"PGHOST={env['PGHOST']}",
        "--env",
        f"PGPORT={env['PGPORT']}",
        "--env",
        f"PGUSER={env['PGUSER']}",
        "--env",
        f"PGPASSWORD={env['PGPASSWORD']}",
        "--env",
        f"PGDATABASE={env['PGDATABASE']}",
    ]


def _check_db_connection() -> None:
    # Validate DB connectivity inside the container before heavy operations.
    cmd = [
        "docker",
        "exec",
        "-i",
        *_docker_pg_env(),
        POSTGRES_CONTAINER,
        "psql",
        "-c",
        "SELECT 1;",
    ]
    result = subprocess.run(cmd, capture_output=True, text=True)
    if result.returncode != 0:
        raise RuntimeError(result.stderr.strip() or "db connection failed")


def list_backups() -> list[BackupMeta]:
    # List backup files on disk with size and timestamp.
    _ensure_backup_dir()
    items: list[BackupMeta] = []
    for path in sorted(BACKUP_DIR.glob("backup_*.dump")):
        stat = path.stat()
        created_at = datetime.fromtimestamp(stat.st_mtime).strftime("%Y-%m-%d %H:%M:%S")
        items.append(
            BackupMeta(
                file_name=path.name,
                size=stat.st_size,
                created_at=created_at,
            )
        )
    return items


def read_logs(limit: int = 200) -> list[str]:
    # Return the last N lines of the backup log.
    if not LOG_FILE.exists():
        return []
    lines = LOG_FILE.read_text().splitlines()
    return lines[-limit:]


def create_backup() -> dict:
    # Run pg_dump in the DB container and stream it to host file.
    _acquire_lock()
    try:
        _ensure_backup_dir()
        _check_db_connection()
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        file_name = f"backup_{timestamp}.dump"
        file_path = BACKUP_DIR / file_name
        cmd = [
            "docker",
            "exec",
            "-i",
            *_docker_pg_env(),
            POSTGRES_CONTAINER,
            "pg_dump",
            "-Fc",
            "--no-owner",
            "--no-privileges",
        ]
        with file_path.open("wb") as dump_file:
            result = subprocess.run(cmd, stdout=dump_file, stderr=subprocess.PIPE, text=True)
        if result.returncode != 0:
            stderr = result.stderr.strip() or "pg_dump failed"
            _write_log("backup", "failed", stderr, file_name)
            raise RuntimeError(stderr)
        size = file_path.stat().st_size if file_path.exists() else 0
        _write_log("backup", "success", "backup completed", file_name)
        return {"file_name": file_name, "size": size}
    finally:
        _release_lock()


def restore_backup(file_name: str) -> dict:
    # Restore a selected backup into the database.
    _acquire_lock()
    try:
        _ensure_backup_dir()
        _check_db_connection()
        file_path = BACKUP_DIR / file_name
        if not file_path.exists():
            raise FileNotFoundError(f"backup file not found: {file_name}")
        env = _pg_env_from_url()
        cmd = [
            "docker",
            "exec",
            "-i",
            *_docker_pg_env(),
            POSTGRES_CONTAINER,
            "pg_restore",
            "--clean",
            "--if-exists",
            "--no-owner",
            "--no-privileges",
            "--dbname",
            env["PGDATABASE"],
        ]
        with file_path.open("rb") as dump_file:
            result = subprocess.run(cmd, stdin=dump_file, stderr=subprocess.PIPE, text=True)
        if result.returncode != 0:
            stderr = result.stderr.strip() or "pg_restore failed"
            _write_log("restore", "failed", stderr, file_name)
            raise RuntimeError(stderr)
        _write_log("restore", "success", "restore completed", file_name)
        return {"file_name": file_name}
    finally:
        _release_lock()
