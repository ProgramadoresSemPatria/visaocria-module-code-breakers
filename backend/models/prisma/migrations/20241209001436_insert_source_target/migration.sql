-- AlterTable
ALTER TABLE "Subject" ADD COLUMN     "source" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "target" INTEGER NOT NULL DEFAULT 0;