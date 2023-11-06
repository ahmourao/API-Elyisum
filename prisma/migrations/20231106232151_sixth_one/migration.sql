-- AlterTable
ALTER TABLE "Aluno" ADD COLUMN     "idLogin" INTEGER;

-- CreateTable
CREATE TABLE "Login" (
    "idLogin" SERIAL NOT NULL,
    "usuario" INTEGER NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "Login_pkey" PRIMARY KEY ("idLogin")
);

-- CreateIndex
CREATE UNIQUE INDEX "Login_idLogin_key" ON "Login"("idLogin");

-- CreateIndex
CREATE UNIQUE INDEX "Login_usuario_key" ON "Login"("usuario");

-- AddForeignKey
ALTER TABLE "Aluno" ADD CONSTRAINT "Aluno_idLogin_fkey" FOREIGN KEY ("idLogin") REFERENCES "Login"("idLogin") ON DELETE SET NULL ON UPDATE CASCADE;
