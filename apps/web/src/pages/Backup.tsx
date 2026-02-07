import { useEffect, useMemo, useState } from "react";
import { apiGet, apiPost } from "../api/client";

type BackupItem = {
  file_name: string;
  size: number;
  created_at: string;
};

function formatSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  const kb = bytes / 1024;
  if (kb < 1024) return `${kb.toFixed(1)} KB`;
  const mb = kb / 1024;
  return `${mb.toFixed(1)} MB`;
}

export default function Backup() {
  const [items, setItems] = useState<BackupItem[]>([]);
  const [logs, setLogs] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [restoring, setRestoring] = useState<string | null>(null);
  const [error, setError] = useState("");

  const sortedItems = useMemo(
    () => [...items].sort((a, b) => b.created_at.localeCompare(a.created_at)),
    [items]
  );

  async function refresh() {
    setError("");
    try {
      const list = await apiGet<{ items: BackupItem[] }>("/admin/db-backup");
      setItems(list.items);
      const logRes = await apiGet<{ lines: string[] }>("/admin/db-backup/logs");
      setLogs(logRes.lines);
    } catch {
      setError("백업 목록 조회 실패");
    }
  }

  useEffect(() => {
    refresh();
  }, []);

  return (
    <section className="space-y-6">
      <div className="rounded-[var(--radius-xl)] border border-black/10 bg-[var(--color-panel)]/70 p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--color-muted)]">
              Database
            </p>
            <h1 className="mt-2 text-3xl font-semibold">DB 백업 관리</h1>
          </div>
          <button
            className="cursor-pointer rounded-[var(--radius-md)] bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60"
            onClick={async () => {
              setLoading(true);
              setError("");
              try {
                await apiPost("/admin/db-backup", {});
                await refresh();
              } catch {
                setError("백업 실패");
              } finally {
                setLoading(false);
              }
            }}
            disabled={loading || !!restoring}
          >
            DB 백업
          </button>
        </div>
        {error ? (
          <div className="mt-4 text-sm text-[var(--color-muted)]">오류: {error}</div>
        ) : null}
      </div>

      <div className="rounded-[var(--radius-xl)] border border-black/10 bg-[var(--color-panel)]/70 p-8">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">백업 목록</h2>
          <button
            className="cursor-pointer rounded-[var(--radius-md)] border border-black/10 bg-white px-4 py-2 text-xs font-semibold text-[var(--color-muted)]"
            onClick={refresh}
          >
            새로고침
          </button>
        </div>
        <div className="mt-4 overflow-hidden rounded-[var(--radius-lg)] border border-black/10 bg-white/80">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-black/10 text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
              <tr>
                <th className="px-5 py-3">백업 일시</th>
                <th className="px-5 py-3">파일명</th>
                <th className="px-5 py-3">파일 사이즈</th>
                <th className="px-5 py-3">작업</th>
              </tr>
            </thead>
            <tbody>
              {sortedItems.length === 0 ? (
                <tr>
                  <td className="px-5 py-4 text-sm text-[var(--color-muted)]" colSpan={4}>
                    백업 파일이 없습니다.
                  </td>
                </tr>
              ) : (
                sortedItems.map((item) => (
                  <tr key={item.file_name} className="border-b border-black/5">
                    <td className="px-5 py-3">{item.created_at}</td>
                    <td className="px-5 py-3">{item.file_name}</td>
                    <td className="px-5 py-3">{formatSize(item.size)}</td>
                    <td className="px-5 py-3">
                      <button
                        className="cursor-pointer rounded-[var(--radius-md)] border border-black/10 bg-white px-3 py-1 text-xs font-semibold text-[var(--color-muted)]"
                        onClick={async () => {
                          const ok = window.confirm(
                            `이 백업으로 복원하시겠습니까?\n${item.file_name}`
                          );
                          if (!ok) return;
                          setRestoring(item.file_name);
                          setError("");
                          try {
                            await apiPost("/admin/db-restore", {
                              file_name: item.file_name,
                            });
                            await refresh();
                          } catch {
                            setError("복원 실패");
                          } finally {
                            setRestoring(null);
                          }
                        }}
                        disabled={!!restoring || loading}
                      >
                        복원
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-[var(--radius-xl)] border border-black/10 bg-[var(--color-panel)]/70 p-8">
        <h2 className="text-lg font-semibold">백업 로그</h2>
        <div className="mt-4 rounded-[var(--radius-lg)] border border-black/10 bg-white/80 p-4 text-xs text-[var(--color-muted)]">
          {logs.length === 0 ? (
            <p>로그가 없습니다.</p>
          ) : (
            <pre className="whitespace-pre-wrap">{logs.join("\n")}</pre>
          )}
        </div>
      </div>
    </section>
  );
}
