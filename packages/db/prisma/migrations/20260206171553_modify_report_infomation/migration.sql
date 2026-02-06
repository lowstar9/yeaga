/*
  Warnings:

  - You are about to drop the column `progressQuarter` on the `CompanyIngestStatus` table. All the data in the column will be lost.
  - You are about to drop the column `fiscalQuarter` on the `IngestJob` table. All the data in the column will be lost.
  - You are about to drop the column `fiscalQuarter` on the `ReportPeriod` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[fiscalYear,reprtCode,periodType,reportName]` on the table `ReportPeriod` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `reprtCode` to the `IngestJob` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reprtCode` to the `ReportPeriod` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "ReportPeriod_fiscalYear_fiscalQuarter_periodType_reportName_key";

-- AlterTable
ALTER TABLE "CompanyIngestStatus" DROP COLUMN "progressQuarter",
ADD COLUMN     "reprtCode" VARCHAR(8);

-- AlterTable
ALTER TABLE "IngestJob" DROP COLUMN "fiscalQuarter",
ADD COLUMN     "reprtCode" VARCHAR(8) NOT NULL;

-- AlterTable
ALTER TABLE "ReportPeriod" DROP COLUMN "fiscalQuarter",
ADD COLUMN     "reprtCode" VARCHAR(8) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ReportPeriod_fiscalYear_reprtCode_periodType_reportName_key" ON "ReportPeriod"("fiscalYear", "reprtCode", "periodType", "reportName");
