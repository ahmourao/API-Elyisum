/*
  Warnings:

  - You are about to drop the column `idBairro` on the `Aluno` table. All the data in the column will be lost.
  - You are about to drop the column `idCidade` on the `Aluno` table. All the data in the column will be lost.
  - You are about to drop the column `idEstado` on the `Aluno` table. All the data in the column will be lost.
  - You are about to drop the column `idRua` on the `Aluno` table. All the data in the column will be lost.
  - You are about to drop the `Bairro` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Cidade` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Estado` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Rua` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `nomeBairro` to the `Aluno` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nomeCidade` to the `Aluno` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nomeRua` to the `Aluno` table without a default value. This is not possible if the table is not empty.
  - Added the required column `siglaEstado` to the `Aluno` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Aluno" DROP CONSTRAINT "Aluno_idBairro_fkey";

-- DropForeignKey
ALTER TABLE "Aluno" DROP CONSTRAINT "Aluno_idCidade_fkey";

-- DropForeignKey
ALTER TABLE "Aluno" DROP CONSTRAINT "Aluno_idEstado_fkey";

-- DropForeignKey
ALTER TABLE "Aluno" DROP CONSTRAINT "Aluno_idRua_fkey";

-- DropForeignKey
ALTER TABLE "Bairro" DROP CONSTRAINT "Bairro_idCidade_fkey";

-- DropForeignKey
ALTER TABLE "Cidade" DROP CONSTRAINT "Cidade_idEstado_fkey";

-- AlterTable
ALTER TABLE "Aluno" DROP COLUMN "idBairro",
DROP COLUMN "idCidade",
DROP COLUMN "idEstado",
DROP COLUMN "idRua",
ADD COLUMN     "nomeBairro" TEXT NOT NULL,
ADD COLUMN     "nomeCidade" TEXT NOT NULL,
ADD COLUMN     "nomeRua" TEXT NOT NULL,
ADD COLUMN     "siglaEstado" TEXT NOT NULL;

-- DropTable
DROP TABLE "Bairro";

-- DropTable
DROP TABLE "Cidade";

-- DropTable
DROP TABLE "Estado";

-- DropTable
DROP TABLE "Rua";
