/*
  Warnings:

  - You are about to drop the column `ra` on the `Boletim` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Boletim" DROP CONSTRAINT "Boletim_ra_fkey";

-- AlterTable
ALTER TABLE "Aluno" ADD COLUMN     "idBoletim" INTEGER;

-- AlterTable
ALTER TABLE "Boletim" DROP COLUMN "ra";

-- AddForeignKey
ALTER TABLE "Aluno" ADD CONSTRAINT "Aluno_idBoletim_fkey" FOREIGN KEY ("idBoletim") REFERENCES "Boletim"("idBoletim") ON DELETE SET NULL ON UPDATE CASCADE;
