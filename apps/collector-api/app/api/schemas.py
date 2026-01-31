from pydantic import BaseModel


class CompanyCreate(BaseModel):
    ticker: str
    name: str
    market: str
    sector: str | None = None


class CompanyOut(BaseModel):
    id: int
    ticker: str
    name: str
    market: str
    sector: str | None = None
    state: str
    # 시가총액(원 단위)
    market_cap: int | None = None

    class Config:
        from_attributes = True


class CompanyListOut(BaseModel):
    # Paged list response for Company search.
    items: list[CompanyOut]
    total: int
