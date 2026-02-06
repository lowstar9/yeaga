/*
  Warnings:

  - You are about to drop the `Financial_KOSDAQ` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Financial_KOSPI` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Financial_legacy` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Financial_legacy" DROP CONSTRAINT "Financial_companyId_fkey";

-- DropForeignKey
ALTER TABLE "Financial_legacy" DROP CONSTRAINT "Financial_itemId_fkey";

-- DropForeignKey
ALTER TABLE "Financial_legacy" DROP CONSTRAINT "Financial_periodId_fkey";

-- AlterTable
ALTER TABLE "Company" ADD COLUMN     "corpCode" VARCHAR(8),
ADD COLUMN     "state" VARCHAR(1) NOT NULL DEFAULT '1';

-- AlterTable
ALTER TABLE "Financial" ALTER COLUMN "createdAt" SET DATA TYPE TIMESTAMP(3);

-- AlterTable
ALTER TABLE "FinancialItem" ADD COLUMN     "fsType" VARCHAR(8);

-- DropTable
DROP TABLE "Financial_KOSDAQ";

-- DropTable
DROP TABLE "Financial_KOSPI";

-- DropTable
DROP TABLE "Financial_legacy";

-- AddForeignKey
ALTER TABLE "Financial" ADD CONSTRAINT "Financial_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Financial" ADD CONSTRAINT "Financial_periodId_fkey" FOREIGN KEY ("periodId") REFERENCES "ReportPeriod"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Financial" ADD CONSTRAINT "Financial_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "FinancialItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
