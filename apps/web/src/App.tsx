import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Companies from "./pages/Companies";

export default function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,var(--color-surface-strong),var(--color-surface)_55%,#efe7da)]">
      <nav className="sticky top-0 z-10 border-b border-black/10 bg-[var(--color-surface-strong)]/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center gap-6 px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-ink)]">
          <Link to="/" className="hover:text-black/60">
            Home
          </Link>
          <Link to="/companies" className="hover:text-black/60">
            Companies
          </Link>
        </div>
      </nav>
      <main className="mx-auto max-w-5xl px-6 py-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/companies" element={<Companies />} />
        </Routes>
      </main>
    </div>
  );
}
