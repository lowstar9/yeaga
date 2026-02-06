-- Financial 테이블을 market LIST + fiscalYear RANGE 파티션으로 전환
-- 주의: 기존 "Financial"에 데이터가 있으면 이 스크립트 실행 전 백업/이관 계획 필요

-- 0) 기존 테이블을 보관용으로 리네임
ALTER TABLE "Financial" RENAME TO "Financial_legacy";
-- 기존 PK 이름 충돌 방지
ALTER TABLE "Financial_legacy" DROP CONSTRAINT IF EXISTS "Financial_pkey";
-- 인덱스/제약 이름 충돌 방지
DROP INDEX IF EXISTS "Financial_companyId_periodId_idx";
DROP INDEX IF EXISTS "Financial_market_fiscalYear_idx";

-- 1) 파티션 부모 테이블 생성
CREATE TABLE "Financial" (
  id bigserial NOT NULL,
  "companyId" bigint NOT NULL,
  "periodId" bigint NOT NULL,
  "itemId" bigint NOT NULL,
  "market" varchar(16) NOT NULL,
  "fiscalYear" int NOT NULL,
  value numeric(20,2) NOT NULL,
  currency varchar(8) NOT NULL DEFAULT 'KRW',
  source varchar(32) NOT NULL DEFAULT 'opendart',
  "createdAt" timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT "Financial_pkey" PRIMARY KEY (id, "market", "fiscalYear"),
  CONSTRAINT "Financial_companyId_periodId_itemId_market_fiscalYear_key"
    UNIQUE ("companyId", "periodId", "itemId", "market", "fiscalYear")
) PARTITION BY LIST ("market");

-- 2) 마켓별 1단계 파티션 생성
CREATE TABLE "Financial_KOSPI"
  PARTITION OF "Financial"
  FOR VALUES IN ('KOSPI')
  PARTITION BY RANGE ("fiscalYear");

CREATE TABLE "Financial_KOSDAQ"
  PARTITION OF "Financial"
  FOR VALUES IN ('KOSDAQ')
  PARTITION BY RANGE ("fiscalYear");

-- 3) 인덱스 생성 (부모에 선언 → 각 파티션에 자동 생성)
CREATE INDEX "Financial_companyId_periodId_idx" ON "Financial" ("companyId", "periodId");
CREATE INDEX "Financial_market_fiscalYear_idx" ON "Financial" ("market", "fiscalYear");

-- 4) 데이터 이관(필요 시)
-- INSERT INTO "Financial" ("companyId","periodId","itemId","market","fiscalYear",value,currency,source,"createdAt")
-- SELECT "companyId","periodId","itemId","market","fiscalYear",value,currency,source,"createdAt"
-- FROM "Financial_legacy";

-- 5) 이관 완료 후 보관 테이블 제거
-- DROP TABLE "Financial_legacy";
