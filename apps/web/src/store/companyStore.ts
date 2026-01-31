import { create } from "zustand";
import { apiGet, apiPost } from "../api/client";

export type Company = {
  id: number;
  ticker: string;
  name: string;
  market: string;
  // 업종명 (KRX 기준) - 없으면 null 처리.
  sector?: string | null;
  state: string;
  // 시가총액 (원 단위, 서버에서 전달)
  market_cap?: number | null;
};

type CompanyState = {
  items: Company[];
  status: string;
  syncStatus: string;
  sectors: string[];
  filters: {
    market: "KOSPI" | "KOSDAQ" | "ALL";
    name: string;
    ticker: string;
    sector: string;
    state: "ALL" | "1" | "0";
  };
  pagination: {
    page: number;
    pageSize: number;
    total: number;
  };
  loadingList: boolean;
  loadingCreate: boolean;
  loadingSync: boolean;
  fetchList: () => Promise<void>;
  fetchSectors: () => Promise<void>;
  setFilters: (next: Partial<CompanyState["filters"]>) => void;
  setPagination: (next: Partial<CompanyState["pagination"]>) => void;
  createCompany: (payload: { ticker: string; name: string; market: string }) => Promise<void>;
  syncCompanies: () => Promise<void>;
};

export const useCompanyStore = create<CompanyState>((set, get) => ({
  items: [],
  status: "",
  syncStatus: "",
  sectors: [],
  filters: {
    market: "ALL",
    name: "",
    ticker: "",
    sector: "",
    state: "ALL",
  },
  pagination: {
    page: 0,
    pageSize: 20,
    total: 0,
  },
  loadingList: false,
  loadingCreate: false,
  loadingSync: false,
  fetchList: async () => {
    set({ loadingList: true });
    try {
      const { filters, pagination } = get();
      const params = new URLSearchParams();
      // Build filter params for server-side paging.
      if (filters.market !== "ALL") params.set("market", filters.market);
      if (filters.name) params.set("name", filters.name);
      if (filters.ticker) params.set("ticker", filters.ticker);
      if (filters.sector) params.set("sector", filters.sector);
      if (filters.state !== "ALL") params.set("state", filters.state);
      params.set("limit", pagination.pageSize.toString());
      params.set("offset", (pagination.page * pagination.pageSize).toString());

      const data = await apiGet<{ items: Company[]; total: number }>(
        `/companies?${params.toString()}`
      );
      set({
        items: data.items,
        pagination: { ...pagination, total: data.total },
      });
    } catch {
      set({ items: [] });
    } finally {
      set({ loadingList: false });
    }
  },
  fetchSectors: async () => {
    try {
      const { filters } = get();
      const params = new URLSearchParams();
      if (filters.market !== "ALL") params.set("market", filters.market);
      const data = await apiGet<{ items: string[] }>(
        `/companies/sectors?${params.toString()}`
      );
      set({ sectors: data.items });
    } catch {
      set({ sectors: [] });
    }
  },
  setFilters: (next) => {
    // Update filters and reset pagination to first page.
    set((state) => ({
      filters: { ...state.filters, ...next },
      pagination: { ...state.pagination, page: 0 },
    }));
  },
  setPagination: (next) => {
    // Update pagination state for server-side grid.
    set((state) => ({ pagination: { ...state.pagination, ...next } }));
  },
  createCompany: async ({ ticker, name, market }) => {
    set({ loadingCreate: true });
    try {
      const res = await apiPost<{ id: number }>("/companies", { ticker, name, market });
      set({ status: `created id=${res.id}` });
      await get().fetchList();
    } catch {
      set({ status: "error" });
    } finally {
      set({ loadingCreate: false });
    }
  },
  syncCompanies: async () => {
    set({ loadingSync: true });
    try {
      // Sync companies and refresh market caps in one call.
      const res = await apiPost<{
        added: number;
        updated: number;
        delisted: number;
        market_cap_updated: number;
      }>(
        "/companies/sync",
        {}
      );
      set({
        syncStatus: `added ${res.added}, updated ${res.updated}, delisted ${res.delisted}, cap ${res.market_cap_updated}`,
      });
      await get().fetchList();
    } catch {
      set({ syncStatus: "sync error" });
    } finally {
      set({ loadingSync: false });
    }
  },
}));
