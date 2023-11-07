-- DropForeignKey
ALTER TABLE "Boletim" DROP CONSTRAINT "Boletim_ra_fkey";

-- DropForeignKey
ALTER TABLE "Historico" DROP CONSTRAINT "Historico_ra_fkey";

-- AlterTable
ALTER TABLE "Boletim" ALTER COLUMN "ra" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Historico" ALTER COLUMN "ra" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Boletim" ADD CONSTRAINT "Boletim_ra_fkey" FOREIGN KEY ("ra") REFERENCES "Aluno"("ra") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Historico" ADD CONSTRAINT "Historico_ra_fkey" FOREIGN KEY ("ra") REFERENCES "Aluno"("ra") ON DELETE SET NULL ON UPDATE CASCADE;
