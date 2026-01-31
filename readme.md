# Yeaga

Monorepo for the financial data collector (FastAPI) and the web dashboard (React).

## Structure
- apps/web: React (Vite) UI and control panel
- apps/collector-api: FastAPI data collection service
- packages/db: Prisma schema and migrations

## Quick start (outline)
1. Create a Postgres database named `yeaga`.
2. Copy `.env.example` to `.env` and fill values.
3. Run Prisma migrations from `packages/db`.
