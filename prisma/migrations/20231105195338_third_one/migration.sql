/*
  Warnings:

  - Added the required column `idCidade` to the `Bairro` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idEstado` to the `Cidade` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Bairro" ADD COLUMN     "idCidade" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Cidade" ADD COLUMN     "idEstado" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Bairro" ADD CONSTRAINT "Bairro_idCidade_fkey" FOREIGN KEY ("idCidade") REFERENCES "Cidade"("idCidade") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cidade" ADD CONSTRAINT "Cidade_idEstado_fkey" FOREIGN KEY ("idEstado") REFERENCES "Estado"("idEstado") ON DELETE RESTRICT ON UPDATE CASCADE;
