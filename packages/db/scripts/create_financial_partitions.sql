-- 자동 파티션 생성 스크립트
-- 전제: "Financial" 테이블이 LIST(market) 파티션으로 이미 구성되어 있어야 합니다.
-- 필요 시 별도 마이그레이션에서 부모 테이블을 PARTITION BY LIST(market)로 전환하세요.

-- 1) 마켓별 1단계 파티션 생성
CREATE TABLE IF NOT EXISTS "Financial_KOSPI"
  PARTITION OF "Financial"
  FOR VALUES IN ('KOSPI')
  PARTITION BY RANGE ("fiscalYear");

CREATE TABLE IF NOT EXISTS "Financial_KOSDAQ"
  PARTITION OF "Financial"
  FOR VALUES IN ('KOSDAQ')
  PARTITION BY RANGE ("fiscalYear");

-- 2) 연도별 2단계 파티션 자동 생성
DO $$
DECLARE
  y int;
  start_year int := 2014;
  end_year int := 2031; -- 포함되지 않는 종료 연도 (2030까지 생성)
BEGIN
  FOR y IN start_year..end_year-1 LOOP
    -- KOSPI 연도 파티션
    EXECUTE format(
      'CREATE TABLE IF NOT EXISTS "Financial_KOSPI_%s" PARTITION OF "Financial_KOSPI" FOR VALUES FROM (%s) TO (%s);',
      y, y, y + 1
    );

    -- KOSDAQ 연도 파티션
    EXECUTE format(
      'CREATE TABLE IF NOT EXISTS "Financial_KOSDAQ_%s" PARTITION OF "Financial_KOSDAQ" FOR VALUES FROM (%s) TO (%s);',
      y, y, y + 1
    );
  END LOOP;
END $$;
