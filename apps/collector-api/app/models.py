from datetime import datetime

from sqlalchemy import BigInteger, DateTime, String, func
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
