// matricula.js - Model
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


export
    //Criar um registro
    async function createMatriculaM(data) {
    const matricula = await prisma.Matricula.create({ data });
    const aluno = await prisma.aluno.findUnique({
        where: {
            ra: matricula.ra,
        }
    });
    await prisma.historicoDisciplinas.create({
        data: {
            idMatricula: matricula.idMatricula,
            idHistorico: aluno.idHistorico,
        }
    });

    return matricula;
}

export
    //Listar tudo
    async function getAllMatriculasM() {
    return prisma.Matricula.findMany({
        select: {
            idMatricula: true,
            disciplina: {
                select: {
                    nomeDisciplina: true,
                },
            },
            aluno: {
                select: {
                    nomeAluno: true,
                },
            },
            nota1: true,
            nota2: true,
            media: true,
        },
    });
}

export
    //Excluir um registro
    async function removeMatriculaM(id) {

    const matriculaAux = await prisma.matricula.findUnique({
        where: {
            idMatricula: id,
        },
    });

    if (!matriculaAux) {
        throw new Error("Matrícula não encontrada");
    }

    const aluno = await prisma.aluno.findUnique({
        where: {
            ra: matriculaAux.ra,
        },
    });

    if (!aluno) {
        throw new Error("Aluno não encontrado");
    }

    await prisma.historicoDisciplinas.delete({
        where: {
            idHistorico_idMatricula:{
                idMatricula: matriculaAux.idMatricula,
                idHistorico: aluno.idHistorico,
            },
        },
    });

    const matricula = await prisma.Matricula.delete({
        where: {
            idMatricula: id,
        },
    });
    console.log(matriculaAux.ra)

    return matricula;
}