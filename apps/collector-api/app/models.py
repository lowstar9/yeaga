from datetime import datetime

from sqlalchemy import BigInteger, DateTime, Integer, String, func
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column


class Base(DeclarativeBase):
    pass


class Company(Base):
    __tablename__ = "Company"

    id: Mapped[int] = mapped_column(BigInteger, primary_key=True, autoincrement=True)
    ticker: Mapped[str] = mapped_column(String(12), unique=True, nullable=False)
    name: Mapped[str] = mapped_column(String(128), nullable=False)
    market: Mapped[str] = mapped_column(String(16), nullable=False)
    sector: Mapped[str | None] = mapped_column(String(128))
    corp_code: Mapped[str | None] = mapped_column("corpCode", String(8))
    state: Mapped[str] = mapped_column(String(1), nullable=False, server_default="1")
    listed_at: Mapped[datetime | None] = mapped_column("listedAt", DateTime(timezone=True))
    market_cap: Mapped[int | None] = mapped_column("marketCap", BigInteger)
    market_cap_at: Mapped[datetime | None] = mapped_column("marketCapAt", DateTime(timezone=True))
    created_at: Mapped[datetime] = mapped_column(
        "createdAt", DateTime(timezone=True), server_default=func.now()
    )
    updated_at: Mapped[datetime] = mapped_column(
        "updatedAt", DateTime(timezone=True), server_default=func.now()
    )


class IngestJob(Base):
    __tablename__ = "IngestJob"

    # Column names follow schema.prisma (camelCase).
    id: Mapped[int] = mapped_column(BigInteger, primary_key=True, autoincrement=True)
    company_id: Mapped[int] = mapped_column("companyId", BigInteger, nullable=False)
    fiscal_year: Mapped[int] = mapped_column("fiscalYear", Integer, nullable=False)
    fiscal_month: Mapped[int] = mapped_column("fiscalMonth", Integer, nullable=False)
    reprt_code: Mapped[str] = mapped_column("reprtCode", String(8), nullable=False)
    priority: Mapped[int] = mapped_column(Integer, nullable=False, server_default="1000")
    status: Mapped[str] = mapped_column(String(16), nullable=False, server_default="pending")
    retries: Mapped[int] = mapped_column(Integer, nullable=False, server_default="0")
    last_error_msg: Mapped[str | None] = mapped_column("lastErrorMsg", String)
    created_at: Mapped[datetime] = mapped_column(
        "createdAt", DateTime(timezone=True), server_default=func.now()
    )
    updated_at: Mapped[datetime] = mapped_column(
        "updatedAt", DateTime(timezone=True), server_default=func.now()
    )
