-- DropForeignKey
ALTER TABLE "Bairro" DROP CONSTRAINT "Bairro_idCidade_fkey";

-- DropForeignKey
ALTER TABLE "Cidade" DROP CONSTRAINT "Cidade_idEstado_fkey";

-- AlterTable
ALTER TABLE "Bairro" ALTER COLUMN "idCidade" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Cidade" ALTER COLUMN "idEstado" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Bairro" ADD CONSTRAINT "Bairro_idCidade_fkey" FOREIGN KEY ("idCidade") REFERENCES "Cidade"("idCidade") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cidade" ADD CONSTRAINT "Cidade_idEstado_fkey" FOREIGN KEY ("idEstado") REFERENCES "Estado"("idEstado") ON DELETE SET NULL ON UPDATE CASCADE;
