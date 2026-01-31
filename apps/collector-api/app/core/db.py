from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from app.core.config import settings


def _normalize_db_url(url: str) -> str:
    url = url.replace("postgresql://", "postgresql+psycopg://", 1)
    if "schema=" in url:
        url = url.split("?")[0]
    return url

engine = create_engine(
    _normalize_db_url(settings.database_url),
    connect_args={"options": "-c search_path=public"},
    pool_pre_ping=True,
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
