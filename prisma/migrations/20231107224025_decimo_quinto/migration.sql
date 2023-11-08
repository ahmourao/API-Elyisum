/*
  Warnings:

  - The `numeroTurma` column on the `Disciplina` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `periodoSemestral` on the `Matricula` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Aluno" ADD COLUMN     "situacao" TEXT NOT NULL DEFAULT 'Ativo';

-- AlterTable
ALTER TABLE "Disciplina" ADD COLUMN     "periodoSemestral" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
DROP COLUMN "numeroTurma",
ADD COLUMN     "numeroTurma" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Matricula" DROP COLUMN "periodoSemestral";
