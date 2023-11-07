/*
  Warnings:

  - You are about to drop the column `courseId` on the `Aluno` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Aluno" DROP COLUMN "courseId",
ALTER COLUMN "sexoAluno" SET DATA TYPE TEXT,
ALTER COLUMN "telefoneAluno" SET DATA TYPE TEXT;
