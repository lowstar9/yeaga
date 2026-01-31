-- CreateTable
CREATE TABLE "Company" (
    "id" BIGSERIAL NOT NULL,
    "ticker" VARCHAR(12) NOT NULL,
    "name" VARCHAR(128) NOT NULL,
    "market" VARCHAR(16) NOT NULL,
    "sector" VARCHAR(128),
    "listedAt" TIMESTAMP(3),
    "marketCap" BIGINT,
    "marketCapAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReportPeriod" (
    "id" BIGSERIAL NOT NULL,
    "fiscalYear" INTEGER NOT NULL,
    "fiscalQuarter" INTEGER NOT NULL,
    "periodType" VARCHAR(16) NOT NULL,
    "reportName" VARCHAR(64),
    "reportDate" TIMESTAMP(3),

    CONSTRAINT "ReportPeriod_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FinancialItem" (
    "id" BIGSERIAL NOT NULL,
    "itemCode" VARCHAR(64) NOT NULL,
    "itemName" VARCHAR(128) NOT NULL,
    "statementType" VARCHAR(16) NOT NULL,
    "unit" VARCHAR(16),

    CONSTRAINT "FinancialItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Financial" (
    "id" BIGSERIAL NOT NULL,
    "companyId" BIGINT NOT NULL,
    "periodId" BIGINT NOT NULL,
    "itemId" BIGINT NOT NULL,
    "value" DECIMAL(20,2) NOT NULL,
    "currency" VARCHAR(8) NOT NULL DEFAULT 'KRW',
    "source" VARCHAR(32) NOT NULL DEFAULT 'opendart',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Financial_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompanyIngestStatus" (
    "companyId" BIGINT NOT NULL,
    "lastSuccessAt" TIMESTAMP(3),
    "lastErrorAt" TIMESTAMP(3),
    "lastErrorMsg" TEXT,
    "progressYear" INTEGER,
    "progressQuarter" INTEGER,
    "status" VARCHAR(16) NOT NULL DEFAULT 'idle',

    CONSTRAINT "CompanyIngestStatus_pkey" PRIMARY KEY ("companyId")
);

-- CreateTable
CREATE TABLE "IngestJob" (
    "id" BIGSERIAL NOT NULL,
    "companyId" BIGINT NOT NULL,
    "fiscalYear" INTEGER NOT NULL,
    "fiscalQuarter" INTEGER NOT NULL,
    "priority" INTEGER NOT NULL DEFAULT 1000,
    "status" VARCHAR(16) NOT NULL DEFAULT 'pending',
    "retries" INTEGER NOT NULL DEFAULT 0,
    "lastErrorMsg" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "IngestJob_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IngestControl" (
    "id" INTEGER NOT NULL DEFAULT 1,
    "runState" VARCHAR(16) NOT NULL DEFAULT 'run',
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "IngestControl_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IngestLog" (
    "id" BIGSERIAL NOT NULL,
    "jobId" BIGINT,
    "level" VARCHAR(8) NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "IngestLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Company_ticker_key" ON "Company"("ticker");

-- CreateIndex
CREATE UNIQUE INDEX "ReportPeriod_fiscalYear_fiscalQuarter_periodType_reportName_key" ON "ReportPeriod"("fiscalYear", "fiscalQuarter", "periodType", "reportName");

-- CreateIndex
CREATE UNIQUE INDEX "FinancialItem_itemCode_key" ON "FinancialItem"("itemCode");

-- CreateIndex
CREATE INDEX "Financial_companyId_periodId_idx" ON "Financial"("companyId", "periodId");

-- CreateIndex
CREATE UNIQUE INDEX "Financial_companyId_periodId_itemId_key" ON "Financial"("companyId", "periodId", "itemId");

-- CreateIndex
CREATE INDEX "IngestJob_status_priority_createdAt_idx" ON "IngestJob"("status", "priority", "createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "IngestJob_companyId_fiscalYear_fiscalQuarter_key" ON "IngestJob"("companyId", "fiscalYear", "fiscalQuarter");

-- AddForeignKey
ALTER TABLE "Financial" ADD CONSTRAINT "Financial_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Financial" ADD CONSTRAINT "Financial_periodId_fkey" FOREIGN KEY ("periodId") REFERENCES "ReportPeriod"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Financial" ADD CONSTRAINT "Financial_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "FinancialItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanyIngestStatus" ADD CONSTRAINT "CompanyIngestStatus_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IngestJob" ADD CONSTRAINT "IngestJob_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IngestLog" ADD CONSTRAINT "IngestLog_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "IngestJob"("id") ON DELETE SET NULL ON UPDATE CASCADE;
