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


class NewReportSummary(BaseModel):
    tickers: int
    annual: int
    half: int
    quarter: int


class NewReportItemIn(BaseModel):
    company_id: int
    fiscal_year: int
    fiscal_month: int
    reprt_code: str


class NewReportEnqueueRequest(BaseModel):
    summary: NewReportSummary
    items: list[NewReportItemIn]


class NewReportEnqueueResponse(BaseModel):
    summary: NewReportSummary
    created: int
