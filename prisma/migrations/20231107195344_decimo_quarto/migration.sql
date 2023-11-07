-- DropForeignKey
ALTER TABLE "Aluno" DROP CONSTRAINT "Aluno_idHistorico_fkey";

-- AlterTable
ALTER TABLE "Aluno" ALTER COLUMN "idHistorico" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Aluno" ADD CONSTRAINT "Aluno_idHistorico_fkey" FOREIGN KEY ("idHistorico") REFERENCES "Historico"("idHistorico") ON DELETE SET NULL ON UPDATE CASCADE;
