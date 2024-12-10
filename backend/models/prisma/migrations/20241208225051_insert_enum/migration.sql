/*
  Warnings:

  - Changed the type of `status` on the `Problem` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "ProblemStatus" AS ENUM ('RESOLVED', 'UNRESOLVED');

-- AlterTable
ALTER TABLE "Problem" DROP COLUMN "status",
ADD COLUMN     "status" "ProblemStatus" NOT NULL;
