/*
  Warnings:

  - Added the required column `idCurso` to the `Aluno` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Aluno" ADD COLUMN     "idCurso" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Aluno" ADD CONSTRAINT "Aluno_idCurso_fkey" FOREIGN KEY ("idCurso") REFERENCES "Curso"("idCurso") ON DELETE RESTRICT ON UPDATE CASCADE;
