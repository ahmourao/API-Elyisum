/*
  Warnings:

  - You are about to drop the column `idBoletim` on the `Aluno` table. All the data in the column will be lost.
  - You are about to drop the column `ra` on the `Historico` table. All the data in the column will be lost.
  - You are about to drop the `Boletim` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BoletimDisciplinas` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `idHistorico` to the `Aluno` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Aluno" DROP CONSTRAINT "Aluno_idBoletim_fkey";

-- DropForeignKey
ALTER TABLE "BoletimDisciplinas" DROP CONSTRAINT "BoletimDisciplinas_idBoletim_fkey";

-- DropForeignKey
ALTER TABLE "BoletimDisciplinas" DROP CONSTRAINT "BoletimDisciplinas_idMatricula_fkey";

-- DropForeignKey
ALTER TABLE "Historico" DROP CONSTRAINT "Historico_ra_fkey";

-- AlterTable
ALTER TABLE "Aluno" DROP COLUMN "idBoletim",
ADD COLUMN     "idHistorico" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Historico" DROP COLUMN "ra";

-- AlterTable
ALTER TABLE "Matricula" ADD COLUMN     "situacao" TEXT NOT NULL DEFAULT 'Cursando';

-- DropTable
DROP TABLE "Boletim";

-- DropTable
DROP TABLE "BoletimDisciplinas";

-- AddForeignKey
ALTER TABLE "Aluno" ADD CONSTRAINT "Aluno_idHistorico_fkey" FOREIGN KEY ("idHistorico") REFERENCES "Historico"("idHistorico") ON DELETE RESTRICT ON UPDATE CASCADE;
