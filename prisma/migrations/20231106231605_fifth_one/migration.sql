/*
  Warnings:

  - The primary key for the `Aluno` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `ra` column on the `Aluno` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[ra]` on the table `Aluno` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `ra` on the `Boletim` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `ra` on the `Historico` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `ra` on the `Matricula` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Boletim" DROP CONSTRAINT "Boletim_ra_fkey";

-- DropForeignKey
ALTER TABLE "Historico" DROP CONSTRAINT "Historico_ra_fkey";

-- DropForeignKey
ALTER TABLE "Matricula" DROP CONSTRAINT "Matricula_ra_fkey";

-- AlterTable
ALTER TABLE "Aluno" DROP CONSTRAINT "Aluno_pkey",
DROP COLUMN "ra",
ADD COLUMN     "ra" SERIAL NOT NULL,
ADD CONSTRAINT "Aluno_pkey" PRIMARY KEY ("ra");

-- AlterTable
ALTER TABLE "Boletim" DROP COLUMN "ra",
ADD COLUMN     "ra" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Historico" DROP COLUMN "ra",
ADD COLUMN     "ra" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Matricula" DROP COLUMN "ra",
ADD COLUMN     "ra" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Aluno_ra_key" ON "Aluno"("ra");

-- AddForeignKey
ALTER TABLE "Matricula" ADD CONSTRAINT "Matricula_ra_fkey" FOREIGN KEY ("ra") REFERENCES "Aluno"("ra") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Boletim" ADD CONSTRAINT "Boletim_ra_fkey" FOREIGN KEY ("ra") REFERENCES "Aluno"("ra") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Historico" ADD CONSTRAINT "Historico_ra_fkey" FOREIGN KEY ("ra") REFERENCES "Aluno"("ra") ON DELETE RESTRICT ON UPDATE CASCADE;
