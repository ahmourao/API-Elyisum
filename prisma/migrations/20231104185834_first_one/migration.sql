-- CreateTable
CREATE TABLE "Bairro" (
    "idBairro" SERIAL NOT NULL,
    "nomeBairro" TEXT NOT NULL,

    CONSTRAINT "Bairro_pkey" PRIMARY KEY ("idBairro")
);

-- CreateTable
CREATE TABLE "Cidade" (
    "idCidade" SERIAL NOT NULL,
    "nomeCidade" TEXT NOT NULL,

    CONSTRAINT "Cidade_pkey" PRIMARY KEY ("idCidade")
);

-- CreateTable
CREATE TABLE "Estado" (
    "idEstado" SERIAL NOT NULL,
    "nomeEstado" TEXT NOT NULL,
    "siglaEstado" TEXT NOT NULL,

    CONSTRAINT "Estado_pkey" PRIMARY KEY ("idEstado")
);

-- CreateTable
CREATE TABLE "Rua" (
    "idRua" SERIAL NOT NULL,
    "nomeRua" TEXT NOT NULL,

    CONSTRAINT "Rua_pkey" PRIMARY KEY ("idRua")
);

-- CreateTable
CREATE TABLE "Aluno" (
    "ra" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "nomeAluno" TEXT NOT NULL,
    "courseId" INTEGER NOT NULL,
    "sobrenomeAluno" TEXT NOT NULL,
    "sexoAluno" INTEGER NOT NULL,
    "emailAluno" TEXT NOT NULL,
    "telefoneAluno" INTEGER NOT NULL,
    "numeroRua" TEXT NOT NULL,
    "complementoMoradia" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "idEstado" INTEGER NOT NULL,
    "idCidade" INTEGER NOT NULL,
    "idBairro" INTEGER NOT NULL,
    "idRua" INTEGER NOT NULL,

    CONSTRAINT "Aluno_pkey" PRIMARY KEY ("ra")
);

-- CreateTable
CREATE TABLE "Departamento" (
    "idDepartamento" SERIAL NOT NULL,
    "nomeDepartamento" TEXT NOT NULL,

    CONSTRAINT "Departamento_pkey" PRIMARY KEY ("idDepartamento")
);

-- CreateTable
CREATE TABLE "Curso" (
    "idCurso" SERIAL NOT NULL,
    "nomeCurso" TEXT NOT NULL,
    "idDepartamento" INTEGER NOT NULL,

    CONSTRAINT "Curso_pkey" PRIMARY KEY ("idCurso")
);

-- CreateTable
CREATE TABLE "Disciplina" (
    "idDisciplina" SERIAL NOT NULL,
    "nomeDisciplina" TEXT NOT NULL,
    "numeroTurma" TEXT NOT NULL DEFAULT '0',
    "cargaHoraria" TEXT NOT NULL DEFAULT '0',
    "descricaoCurricular" TEXT NOT NULL,
    "semestre" TEXT NOT NULL,
    "idDepartamento" INTEGER NOT NULL,
    "idCurso" INTEGER NOT NULL,

    CONSTRAINT "Disciplina_pkey" PRIMARY KEY ("idDisciplina")
);

-- CreateTable
CREATE TABLE "Matricula" (
    "idMatricula" SERIAL NOT NULL,
    "frequencia" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "nota1" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "nota2" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "media" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "periodoSemestral" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "idDisciplina" INTEGER NOT NULL,
    "ra" TEXT NOT NULL,

    CONSTRAINT "Matricula_pkey" PRIMARY KEY ("idMatricula")
);

-- CreateTable
CREATE TABLE "Boletim" (
    "idBoletim" SERIAL NOT NULL,
    "ra" TEXT NOT NULL,

    CONSTRAINT "Boletim_pkey" PRIMARY KEY ("idBoletim")
);

-- CreateTable
CREATE TABLE "BoletimDisciplinas" (
    "idBoletim" INTEGER NOT NULL,
    "idMatricula" INTEGER NOT NULL,

    CONSTRAINT "BoletimDisciplinas_pkey" PRIMARY KEY ("idBoletim","idMatricula")
);

-- CreateTable
CREATE TABLE "Historico" (
    "idHistorico" SERIAL NOT NULL,
    "ra" TEXT NOT NULL,

    CONSTRAINT "Historico_pkey" PRIMARY KEY ("idHistorico")
);

-- CreateTable
CREATE TABLE "HistoricoDisciplinas" (
    "idHistorico" INTEGER NOT NULL,
    "idMatricula" INTEGER NOT NULL,

    CONSTRAINT "HistoricoDisciplinas_pkey" PRIMARY KEY ("idHistorico","idMatricula")
);

-- CreateIndex
CREATE UNIQUE INDEX "Bairro_idBairro_key" ON "Bairro"("idBairro");

-- CreateIndex
CREATE UNIQUE INDEX "Cidade_idCidade_key" ON "Cidade"("idCidade");

-- CreateIndex
CREATE UNIQUE INDEX "Estado_idEstado_key" ON "Estado"("idEstado");

-- CreateIndex
CREATE UNIQUE INDEX "Rua_idRua_key" ON "Rua"("idRua");

-- CreateIndex
CREATE UNIQUE INDEX "Departamento_idDepartamento_key" ON "Departamento"("idDepartamento");

-- CreateIndex
CREATE UNIQUE INDEX "Curso_idCurso_key" ON "Curso"("idCurso");

-- CreateIndex
CREATE UNIQUE INDEX "Disciplina_idDisciplina_key" ON "Disciplina"("idDisciplina");

-- CreateIndex
CREATE UNIQUE INDEX "Matricula_idMatricula_key" ON "Matricula"("idMatricula");

-- CreateIndex
CREATE UNIQUE INDEX "Boletim_idBoletim_key" ON "Boletim"("idBoletim");

-- CreateIndex
CREATE UNIQUE INDEX "Historico_idHistorico_key" ON "Historico"("idHistorico");

-- AddForeignKey
ALTER TABLE "Aluno" ADD CONSTRAINT "Aluno_idEstado_fkey" FOREIGN KEY ("idEstado") REFERENCES "Estado"("idEstado") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Aluno" ADD CONSTRAINT "Aluno_idCidade_fkey" FOREIGN KEY ("idCidade") REFERENCES "Cidade"("idCidade") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Aluno" ADD CONSTRAINT "Aluno_idBairro_fkey" FOREIGN KEY ("idBairro") REFERENCES "Bairro"("idBairro") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Aluno" ADD CONSTRAINT "Aluno_idRua_fkey" FOREIGN KEY ("idRua") REFERENCES "Rua"("idRua") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Curso" ADD CONSTRAINT "Curso_idDepartamento_fkey" FOREIGN KEY ("idDepartamento") REFERENCES "Departamento"("idDepartamento") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Disciplina" ADD CONSTRAINT "Disciplina_idDepartamento_fkey" FOREIGN KEY ("idDepartamento") REFERENCES "Departamento"("idDepartamento") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Disciplina" ADD CONSTRAINT "Disciplina_idCurso_fkey" FOREIGN KEY ("idCurso") REFERENCES "Curso"("idCurso") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Matricula" ADD CONSTRAINT "Matricula_idDisciplina_fkey" FOREIGN KEY ("idDisciplina") REFERENCES "Disciplina"("idDisciplina") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Matricula" ADD CONSTRAINT "Matricula_ra_fkey" FOREIGN KEY ("ra") REFERENCES "Aluno"("ra") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Boletim" ADD CONSTRAINT "Boletim_ra_fkey" FOREIGN KEY ("ra") REFERENCES "Aluno"("ra") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BoletimDisciplinas" ADD CONSTRAINT "BoletimDisciplinas_idBoletim_fkey" FOREIGN KEY ("idBoletim") REFERENCES "Boletim"("idBoletim") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BoletimDisciplinas" ADD CONSTRAINT "BoletimDisciplinas_idMatricula_fkey" FOREIGN KEY ("idMatricula") REFERENCES "Matricula"("idMatricula") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Historico" ADD CONSTRAINT "Historico_ra_fkey" FOREIGN KEY ("ra") REFERENCES "Aluno"("ra") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HistoricoDisciplinas" ADD CONSTRAINT "HistoricoDisciplinas_idHistorico_fkey" FOREIGN KEY ("idHistorico") REFERENCES "Historico"("idHistorico") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HistoricoDisciplinas" ADD CONSTRAINT "HistoricoDisciplinas_idMatricula_fkey" FOREIGN KEY ("idMatricula") REFERENCES "Matricula"("idMatricula") ON DELETE RESTRICT ON UPDATE CASCADE;
