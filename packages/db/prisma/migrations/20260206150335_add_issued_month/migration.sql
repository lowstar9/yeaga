/*
  Warnings:

  - A unique constraint covering the columns `[companyId,fiscalYear,fiscalMonth]` on the table `IngestJob` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `fiscalMonth` to the `IngestJob` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "IngestJob_companyId_fiscalYear_fiscalQuarter_key";

-- AlterTable
ALTER TABLE "IngestJob" ADD COLUMN     "fiscalMonth" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "IngestJob_companyId_fiscalYear_fiscalMonth_key" ON "IngestJob"("companyId", "fiscalYear", "fiscalMonth");
