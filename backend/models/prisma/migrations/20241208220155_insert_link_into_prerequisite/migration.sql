/*
  Warnings:

  - Added the required column `link` to the `Prerequisite` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Prerequisite" ADD COLUMN     "link" TEXT NOT NULL;
