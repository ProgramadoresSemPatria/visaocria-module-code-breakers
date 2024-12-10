/*
  Warnings:

  - Added the required column `matter` to the `Courses` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "CoursesMatter" AS ENUM ('DATA_STRUCTURES_AND_ALGORITHMS', 'SYSTEM_DESIGN', 'PYTHON', 'FULL_STACK_DEVELOPMENT', 'OBJECT_ORIENTED_DESIGN');

-- AlterTable
ALTER TABLE "Courses" ADD COLUMN     "matter" TEXT NOT NULL;
