import { useEffect, useState } from "react";
import { apiGet } from "../api/client";

export default function Home() {
  const [status, setStatus] = useState<string>("checking...");

  useEffect(() => {
    apiGet<{ status: string }>("/health")
      .then((data) => setStatus(data.status))
      .catch(() => setStatus("error"));
  }, []);

  return (
    <section className="space-y-6">
      <div className="rounded-[var(--radius-xl)] border border-black/10 bg-[var(--color-panel)]/70 p-10 shadow-[var(--shadow-soft)]">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--color-muted)]">
          Yeaga Financial Stack
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">
          Korean equity data ingestion &amp; control
        </h1>
        <p className="mt-3 max-w-xl text-sm text-[var(--color-muted)]">
          Connects to DART, prioritizes market-cap leaders, and keeps your
          financials in sync.
        </p>
      </div>
      <div className="rounded-[var(--radius-lg)] border border-black/10 bg-[var(--color-accent)] px-6 py-4 text-white">
        <span className="text-xs uppercase tracking-[0.3em] text-white/70">
          Api status
        </span>
        <p className="mt-2 text-lg font-semibold">{status}</p>
      </div>
    </section>
  );
}
