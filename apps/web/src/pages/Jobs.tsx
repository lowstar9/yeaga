import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef } from "@mui/x-data-grid";
import { apiGet, apiPost } from "../api/client";

// TODO: Replace mock data with API-driven data once /reports/new and /jobs endpoints are ready.

export default function Jobs() {
  // 신규 보고서 요약 상태 (API 결과를 반영).
  const [reportSummary, setReportSummary] = useState({
    tickers: 0,
    annual: 0,
    half: 0,
    quarter: 0,
  });
  const [loadingReports, setLoadingReports] = useState(false);
  const [reportError, setReportError] = useState("");
  const [progress, setProgress] = useState({ percent: 0, current: "" });
  const [addingJobs, setAddingJobs] = useState(false);
  const [reportItems, setReportItems] = useState<
    {
      company_id: number;
      fiscal_year: number;
      fiscal_month: number;
      reprt_code: string;
    }[]
  >([]);
  const scanSocketRef = useRef<WebSocket | null>(null);
  const [jobs, setJobs] = useState<
    {
      id: number;
      ticker: string;
      name: string;
      fiscalYear: number;
      fiscalMonth: number;
      reprtCode: string;
      status: string;
      priority: number;
      retries: number;
      updatedAt: string;
    }[]
  >([]);
  const [doneJobs, setDoneJobs] = useState<
    {
      id: number;
      ticker: string;
      name: string;
      fiscalYear: number;
      fiscalMonth: number;
      reprtCode: string;
      updatedAt: string;
    }[]
  >([]);
  const [jobsError, setJobsError] = useState("");

  const loadJobs = useCallback(async () => {
    setJobsError("");
    try {
      const result = await apiGet<{
        items: {
          id: number;
          ticker: string;
          name: string;
          fiscalYear: number;
          fiscalMonth: number;
          reprtCode: string;
          status: string;
          priority: number;
          retries: number;
          updatedAt: string;
        }[];
      }>("/jobs");
      setJobs(result.items.filter((job) => job.status !== "done"));
      setDoneJobs(
        result.items
          .filter((job) => job.status === "done")
          .map((job) => ({
            id: job.id,
            ticker: job.ticker,
            name: job.name,
            fiscalYear: job.fiscalYear,
            fiscalMonth: job.fiscalMonth,
            reprtCode: job.reprtCode,
            updatedAt: job.updatedAt,
          })),
      );
    } catch {
      setJobsError("작업 목록 조회 실패");
    }
  }, []);

  useEffect(() => {
    loadJobs();
    return () => {
      scanSocketRef.current?.close();
      scanSocketRef.current = null;
    };
  }, [loadJobs]);

  // Mock 작업 큐 데이터.
  const jobColumns: GridColDef[] = [
    {
      field: "no",
      headerName: "No",
      width: 80,
      sortable: false,
      filterable: false,
      // 화면 표시 순번(대기 작업 기준).
      renderCell: (params) => {
        const visibleIndex = params.api.getSortedRowIds().indexOf(params.id);
        return visibleIndex + 1;
      },
    },
    { field: "id", headerName: "Job ID", flex: 0.4, minWidth: 90 },
    { field: "ticker", headerName: "Ticker", flex: 0.6, minWidth: 120 },
    { field: "name", headerName: "Name", flex: 1.2, minWidth: 200 },
    { field: "fiscalYear", headerName: "Year", flex: 0.4, minWidth: 100 },
    { field: "reprtCode", headerName: "Report", flex: 0.5, minWidth: 120 },
    { field: "fiscalMonth", headerName: "Month", flex: 0.4, minWidth: 100 },
    { field: "status", headerName: "Status", flex: 0.6, minWidth: 120 },
    { field: "priority", headerName: "Priority", flex: 0.4, minWidth: 100 },
    { field: "retries", headerName: "Retries", flex: 0.4, minWidth: 100 },
    { field: "updatedAt", headerName: "Updated", flex: 0.8, minWidth: 160 },
  ];

  const doneColumns: GridColDef[] = [
    {
      field: "no",
      headerName: "No",
      width: 80,
      sortable: false,
      filterable: false,
      // 화면 표시 순번(완료 작업 기준).
      renderCell: (params) => {
        const visibleIndex = params.api.getSortedRowIds().indexOf(params.id);
        return visibleIndex + 1;
      },
    },
    { field: "id", headerName: "Job ID", flex: 0.4, minWidth: 90 },
    { field: "ticker", headerName: "Ticker", flex: 0.6, minWidth: 120 },
    { field: "name", headerName: "Name", flex: 1.2, minWidth: 200 },
    { field: "fiscalYear", headerName: "Year", flex: 0.4, minWidth: 100 },
    { field: "reprtCode", headerName: "Report", flex: 0.5, minWidth: 120 },
    { field: "fiscalMonth", headerName: "Month", flex: 0.4, minWidth: 100 },
    { field: "updatedAt", headerName: "Completed", flex: 0.8, minWidth: 160 },
  ];

  // Mock 작업 로그 데이터.
  const logs = useMemo(
    () => [
      "09:00 고아 작업 탐지: running 상태 3건 → pending으로 복구",
      "09:05 오류 작업 재시도: companyId=15, 2025Q4 재시도 1회",
      "09:12 DART 응답 지연 감지 → 5초 backoff 적용",
      "09:20 완료 처리: companyId=1, 2025Q4",
    ],
    [],
  );

  // Progress is updated via WebSocket events.

  const pendingRows = jobs.filter((job) => job.status !== "done");

  return (
    <section className="space-y-8">
      <div className="rounded-[var(--radius-xl)] border border-black/10 bg-[var(--color-panel)]/70 p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--color-muted)]">
              New Reports
            </p>
            <h1 className="mt-2 text-3xl font-semibold">신규 보고서 요약</h1>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              className="cursor-pointer rounded-[var(--radius-md)] border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-[var(--color-muted)] disabled:cursor-not-allowed disabled:opacity-60"
              onClick={async () => {
                if (loadingReports) {
                  try {
                    scanSocketRef.current?.send("stop");
                  } catch {
                    // ignore send errors when socket is already closed
                  }
                  scanSocketRef.current?.close();
                  scanSocketRef.current = null;
                  setLoadingReports(false);
                  setReportError("검색이 중단되었습니다.");
                  setProgress({ percent: 0, current: "" });
                  setReportItems([]);
                  return;
                }
                // Start scan job and listen for progress via WebSocket.
                setLoadingReports(true);
                setReportError("");
                setProgress({ percent: 0, current: "" });
                try {
                  const start = await apiPost<{ job_id: string }>(
                    "/reports/new/start",
                    {},
                  );
                  const ws = new WebSocket(
                    `ws://localhost:8000/ws/reports/new/${start.job_id}`,
                  );
                  scanSocketRef.current = ws;

                  ws.onmessage = (event) => {
                    const payload = JSON.parse(event.data);
                    if (payload.type === "progress") {
                      setProgress({
                        percent: payload.percent ?? 0,
                        current: payload.current ?? "",
                      });
                    }
                    if (payload.type === "done") {
                      setReportSummary({
                        tickers: payload.summary?.tickers ?? 0,
                        annual: payload.summary?.annual ?? 0,
                        half: payload.summary?.half ?? 0,
                        quarter: payload.summary?.quarter ?? 0,
                      });
                      setReportItems(
                        Array.isArray(payload.items)
                          ? payload.items.map((item: any) => ({
                              company_id: item.company_id,
                              fiscal_year: item.fiscal_year,
                              fiscal_month: item.fiscal_month,
                              reprt_code: item.reprt_code,
                            }))
                          : [],
                      );
                      setLoadingReports(false);
                      scanSocketRef.current?.close();
                      scanSocketRef.current = null;
                    }
                    if (payload.type === "error") {
                      setReportError(
                        payload.message || "신규 보고서 조회 실패",
                      );
                      setLoadingReports(false);
                      scanSocketRef.current?.close();
                      scanSocketRef.current = null;
                    }
                  };
                } catch {
                  setReportError("신규 보고서 조회 실패");
                  setLoadingReports(false);
                }
              }}
              disabled={addingJobs}
            >
              {loadingReports ? "찾기 중단" : "신규 보고서 찾기"}
            </button>
            <button
              className="cursor-pointer rounded-[var(--radius-md)] bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-white"
              onClick={async () => {
                setAddingJobs(true);
                setReportError("");
                try {
                  const result = await apiPost<{
                    summary: {
                      tickers: number;
                      annual: number;
                      half: number;
                      quarter: number;
                    };
                    created: number;
                  }>("/jobs/add", {
                    summary: reportSummary,
                    items: reportItems,
                  });
                  setReportSummary({
                    tickers: 0,
                    annual: 0,
                    half: 0,
                    quarter: 0,
                  });
                  setReportItems([]);
                  await loadJobs();
                  alert(`작업추가 완료: ${result.created}건`);
                } catch {
                  setReportError("작업 추가 실패");
                } finally {
                  setAddingJobs(false);
                }
              }}
              disabled={addingJobs || loadingReports}
            >
              작업추가
            </button>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-[var(--color-muted)]">
          {reportError ? <span>오류: {reportError}</span> : null}
          {jobsError ? <span>오류: {jobsError}</span> : null}
          {loadingReports ? <span>신규 보고서 검색 중...</span> : null}
          {addingJobs ? <span>작업 추가 중...</span> : null}
          {loadingReports ? (
            <span className="rounded-full border border-black/10 px-3 py-1 text-xs">
              진행률 {progress.percent}%
            </span>
          ) : null}
        </div>
        {/* 신규 보고서 요약 카드 */}
        <div className="mt-4 space-y-4">
          <div className="rounded-[var(--radius-lg)] border border-black/10 bg-white/80 p-5">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
                  신규 보고서 진행
                </p>
                <p className="mt-2 text-base font-semibold">
                  {progress.current}
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
                  진행률
                </p>
                <p className="mt-2 text-2xl font-semibold">
                  {progress.percent}%
                </p>
              </div>
            </div>
            <div className="mt-4 h-2 w-full rounded-full bg-black/10">
              <div
                className="h-2 rounded-full bg-[var(--color-accent)]"
                style={{ width: `${progress.percent}%` }}
              />
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
          <div className="rounded-[var(--radius-lg)] border border-black/10 bg-white/80 p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
              종목
            </p>
            <p className="mt-2 text-3xl font-semibold">
              {reportSummary.tickers}건
            </p>
          </div>
          <div className="rounded-[var(--radius-lg)] border border-black/10 bg-white/80 p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
              사업보고서
            </p>
            <p className="mt-2 text-3xl font-semibold">
              {reportSummary.annual}건
            </p>
          </div>
          <div className="rounded-[var(--radius-lg)] border border-black/10 bg-white/80 p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
              반기보고서
            </p>
            <p className="mt-2 text-3xl font-semibold">
              {reportSummary.half}건
            </p>
          </div>
          <div className="rounded-[var(--radius-lg)] border border-black/10 bg-white/80 p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
              분기보고서
            </p>
            <p className="mt-2 text-3xl font-semibold">
              {reportSummary.quarter}건
            </p>
          </div>
          </div>
        </div>
      </div>

      <div className="rounded-[var(--radius-xl)] border border-black/10 bg-[var(--color-panel)]/70 p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--color-muted)]">
              Financial Job Queue
            </p>
            <h2 className="mt-2 text-2xl font-semibold">
              재무제표 구축 작업 현황
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="cursor-pointer rounded-[var(--radius-md)] border border-black/10 bg-white px-4 py-2 text-xs font-semibold text-[var(--color-muted)]">
              시작
            </button>
            <button className="cursor-pointer rounded-[var(--radius-md)] border border-black/10 bg-white px-4 py-2 text-xs font-semibold text-[var(--color-muted)]">
              일시정지
            </button>
            <button className="cursor-pointer rounded-[var(--radius-md)] border border-black/10 bg-white px-4 py-2 text-xs font-semibold text-[var(--color-muted)]">
              중지
            </button>
          </div>
        </div>
        {/* 대기 작업 그리드 (완료 작업은 제외) */}
        <div className="mt-6 overflow-hidden rounded-[var(--radius-lg)] border border-black/10 bg-white/80">
          {/* 대기 작업 건수 표시 */}
          <div className="border-b border-black/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-muted)]">
            대기 작업 {pendingRows.length}건
          </div>
          <DataGrid
            autoHeight
            rows={pendingRows}
            columns={jobColumns}
            disableRowSelectionOnClick
            hideFooter
            sx={{
              border: "none",
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: "rgba(0,0,0,0.04)",
                textTransform: "uppercase",
                letterSpacing: "0.3em",
                fontSize: "0.65rem",
              },
            }}
          />
        </div>
        {/* 완료 작업 및 로그 영역 (상하 배치) */}
        <div className="mt-6 space-y-6">
          <CompletedJobsGrid rows={doneJobs} columns={doneColumns} />
          <JobLogPanel logs={logs} />
        </div>
      </div>
    </section>
  );
}

// 완료 작업 그리드 컴포넌트 (검색/레이지 로딩 포함).
function CompletedJobsGrid({
  rows,
  columns,
}: {
  rows: {
    id: number;
    ticker: string;
    name: string;
    fiscalYear: number;
    fiscalMonth: number;
    reprtCode: string;
    updatedAt: string;
  }[];
  columns: GridColDef[];
}) {
  const [query, setQuery] = useState("");
  const [year, setYear] = useState("");
  const [visibleCount, setVisibleCount] = useState(20);
  const [applied, setApplied] = useState({ query: "", year: "" });

  // 검색 필터(종목명/코드/년도).
  const filtered = useMemo(() => {
    const q = applied.query.trim().toLowerCase();
    const y = applied.year.trim();
    return rows.filter((row) => {
      const matchQuery =
        !q || row.ticker.includes(q) || row.name.toLowerCase().includes(q);
      const matchYear = !y || String(row.fiscalYear) === y;
      return matchQuery && matchYear;
    });
  }, [applied, rows]);

  // 레이지 로딩: 보여줄 개수를 점진적으로 늘림.
  const visibleRows = filtered.slice(0, visibleCount);

  return (
    <div className="rounded-[var(--radius-lg)] border border-black/10 bg-white/80">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/10 px-5 py-3">
        <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-muted)]">
          완료 작업 {filtered.length}건
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <input
            className="rounded-[var(--radius-md)] border border-black/10 bg-white px-4 py-2 text-xs"
            placeholder="검색 (종목명/코드)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <input
            className="w-24 rounded-[var(--radius-md)] border border-black/10 bg-white px-3 py-2 text-xs"
            placeholder="년도"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
          <button
            className="cursor-pointer rounded-[var(--radius-md)] bg-[var(--color-accent)] px-3 py-2 text-xs font-semibold text-white"
            onClick={() => {
              setApplied({ query, year });
              setVisibleCount(20);
            }}
          >
            검색
          </button>
        </div>
      </div>
      <DataGrid
        autoHeight
        rows={visibleRows}
        columns={columns}
        disableRowSelectionOnClick
        hideFooter
        sx={{
          border: "none",
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "rgba(0,0,0,0.04)",
            textTransform: "uppercase",
            letterSpacing: "0.3em",
            fontSize: "0.65rem",
          },
        }}
      />
      {/* 레이지 로딩 버튼 */}
      {visibleCount < filtered.length ? (
        <div className="p-4">
          <button
            className="cursor-pointer rounded-[var(--radius-md)] border border-black/10 bg-white px-4 py-2 text-xs font-semibold text-[var(--color-muted)]"
            onClick={() => setVisibleCount((prev) => prev + 20)}
          >
            더 보기
          </button>
        </div>
      ) : null}
    </div>
  );
}

// 작업 로그 패널 (상하 배치).
function JobLogPanel({ logs }: { logs: string[] }) {
  return (
    <div className="rounded-[var(--radius-lg)] border border-black/10 bg-white/80 p-5">
      <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-muted)]">
        작업 로그
      </div>
      <ul className="mt-4 space-y-3 text-sm text-[var(--color-muted)]">
        {logs.map((line) => (
          <li key={line} className="leading-relaxed">
            {line}
          </li>
        ))}
      </ul>
    </div>
  );
}
