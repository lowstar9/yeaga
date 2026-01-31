import { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef } from "@mui/x-data-grid";
import { useCompanyStore } from "../store/companyStore";

export default function Companies() {
  const {
    items,
    status,
    syncStatus,
    sectors,
    filters,
    pagination,
    loadingList,
    loadingSync,
    fetchList,
    fetchSectors,
    setFilters,
    setPagination,
    syncCompanies,
  } = useCompanyStore();

  useEffect(() => {
    // Initial load for list and sector options.
    fetchList();
    fetchSectors();
  }, [fetchList, fetchSectors]);

  async function sync() {
    await syncCompanies();
  }

  function onMarketSelect(mkt: typeof filters.market) {
    // Apply market filter and immediately refetch data for that market.
    setFilters({ market: mkt });
    fetchSectors();
    fetchList();
  }

  function resetFilters() {
    // Reset search filters but keep the selected market.
    setFilters({ name: "", ticker: "", sector: "", state: "ALL" });
    fetchSectors();
    fetchList();
  }

  return (
    <section className="space-y-8">
      <div className="rounded-[var(--radius-xl)] border border-black/10 bg-[var(--color-panel)]/70 p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--color-muted)]">
              Companies
            </p>
            <h1 className="mt-2 text-3xl font-semibold">Search companies</h1>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="rounded-full border border-black/10 bg-[var(--color-panel)] px-4 py-2 text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
              status: {status || "ready"}
            </span>
            <button
              className="cursor-pointer inline-flex items-center gap-2 rounded-full border border-black/10 bg-[var(--color-accent)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              onClick={sync}
              disabled={loadingSync}
            >
              {loadingSync ? (
                <span className="h-3 w-3 animate-spin rounded-full border-2 border-white/40 border-t-white" />
              ) : null}
              종목 업데이트
            </button>
          </div>
        </div>
        {/* Sync result message includes market cap refresh count */}
        {syncStatus ? (
          <p className="mt-4 text-sm text-[var(--color-muted)]">{syncStatus}</p>
        ) : null}
        {/* Use MUI Grid for search area layout */}
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid size={{ xs: 12 }}>
            {/* Market toggle buttons */}
            <div className="flex flex-wrap gap-2">
              {["ALL", "KOSPI", "KOSDAQ"].map((mkt) => (
                <button
                  key={mkt}
                  className={`cursor-pointer rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] transition ${
                    filters.market === mkt
                      ? "border-black/10 bg-[var(--color-accent)] text-white"
                      : "border-black/10 bg-white text-[var(--color-muted)] hover:bg-black/5"
                  }`}
                  onClick={() => onMarketSelect(mkt as typeof filters.market)}
                >
                  {mkt === "ALL" ? "ALL" : mkt}
                </button>
              ))}
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <input
              className="w-full rounded-[var(--radius-md)] border border-black/10 bg-[var(--color-panel)] px-4 py-3 text-sm"
              value={filters.name}
              onChange={(e) => setFilters({ name: e.target.value })}
              placeholder="종목명 (like)"
            />
          </Grid>
          <Grid size={{ xs: 12, md: 2 }}>
            <input
              className="w-full rounded-[var(--radius-md)] border border-black/10 bg-[var(--color-panel)] px-4 py-3 text-sm"
              value={filters.ticker}
              onChange={(e) => setFilters({ ticker: e.target.value })}
              placeholder="종목코드"
            />
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <select
              className="w-full rounded-[var(--radius-md)] border border-black/10 bg-[var(--color-panel)] px-4 py-3 text-sm"
              value={filters.sector}
              onChange={(e) => setFilters({ sector: e.target.value })}
            >
              <option value="">섹터(전체)</option>
              {sectors.map((sector) => (
                <option key={sector} value={sector}>
                  {sector}
                </option>
              ))}
            </select>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <select
              className="w-full rounded-[var(--radius-md)] border border-black/10 bg-[var(--color-panel)] px-4 py-3 text-sm"
              value={filters.state}
              onChange={(e) => setFilters({ state: e.target.value as typeof filters.state })}
            >
              <option value="ALL">상태(전체)</option>
              <option value="1">정상</option>
              <option value="0">상장폐지</option>
            </select>
          </Grid>
          <Grid size={{ xs: 12 }}>
            <div className="flex flex-wrap gap-2">
              <button
                className="cursor-pointer inline-flex items-center gap-2 rounded-[var(--radius-md)] bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                onClick={fetchList}
              >
                검색
              </button>
              <button
                className="cursor-pointer inline-flex items-center gap-2 rounded-[var(--radius-md)] border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-[var(--color-muted)] transition hover:bg-black/5"
                onClick={resetFilters}
              >
                초기화
              </button>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="overflow-hidden rounded-[var(--radius-lg)] border border-black/10 bg-[var(--color-panel)]/80">
        <DataGrid
          autoHeight
          rows={items}
          loading={loadingList}
          columns={
            [
              {
                field: "no",
                headerName: "No",
                width: 80,
                sortable: false,
                filterable: false,
                // DataGrid v8: compute visible index from sorted row ids.
                renderCell: (params) => {
                  const visibleIndex = params.api.getSortedRowIds().indexOf(params.id);
                  return pagination.page * pagination.pageSize + visibleIndex + 1;
                },
              },
              { field: "ticker", headerName: "Ticker", flex: 0.8, minWidth: 120 },
              { field: "name", headerName: "Name", flex: 1.6, minWidth: 200 },
              { field: "sector", headerName: "Sector", flex: 1, minWidth: 160 },
              { field: "market", headerName: "Market", flex: 0.8, minWidth: 120 },
              {
                field: "market_cap",
                headerName: "Market Cap (억)",
                flex: 0.9,
                minWidth: 160,
                valueFormatter: (value) => {
                  if (!value) return "-";
                  const amount = Number(value);
                  const trillion = 1_000_000_000_000;
                  const hundredMillion = 100_000_000;
                  // 조 단위 우선 표기, 아니면 억 단위로 표시.
                  if (amount >= trillion) {
                    const v = amount / trillion;
                    return `${v.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}조`;
                  }
                  const v = amount / hundredMillion;
                  return `${v.toFixed(1).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}억`;
                },
              },
              {
                field: "state",
                headerName: "State",
                flex: 0.6,
                minWidth: 120,
              valueFormatter: (value) => (value === "1" ? "정상" : "상장폐지"),
            },
          ] as GridColDef[]
          }
          // Use server-side pagination with total count from API.
          pagination
          paginationMode="server"
          rowCount={pagination.total}
          pageSizeOptions={[10, 20, 50]}
          paginationModel={{ page: pagination.page, pageSize: pagination.pageSize }}
          onPaginationModelChange={(model) => {
            setPagination({ page: model.page, pageSize: model.pageSize });
            fetchList();
          }}
          disableColumnMenu
          disableRowSelectionOnClick
          getRowHeight={() => 52}
          sx={{
            border: "none",
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "rgba(0,0,0,0.04)",
              textTransform: "uppercase",
              letterSpacing: "0.3em",
              fontSize: "0.65rem",
            },
            "& .MuiDataGrid-cell": {
              borderColor: "rgba(0,0,0,0.05)",
            },
            "& .MuiDataGrid-row:hover": {
              backgroundColor: "rgba(0,0,0,0.03)",
            },
          }}
        />
      </div>
    </section>
  );
}
