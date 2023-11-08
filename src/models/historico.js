// historico.js - Model
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();



export
    //Listar tudo
    async function getHistoricoEscolarM(id) {
    const aluno = await prisma.aluno.findUnique({
        where: {
            ra: id,
        },
    });
    const idHistorico = aluno.idHistorico;
    let relacao = await prisma.historicoDisciplinas.findMany({
        where: {
            idHistorico: idHistorico,
        },
    });
    const relacaoDeMatriculas = relacao.map( registro => registro.idMatricula);
    const relacaoDeDisciplinas = await prisma.matricula.findMany({
        where: {
            idMatricula: {
                in: relacaoDeMatriculas,
            }
        },
        include:{
            disciplina: {
                select: {
                    nomeDisciplina: true,
                }
            }
        }
    })
    return relacaoDeDisciplinas;
}

export
    //Listar tudo
    async function getAllHistoricosM() {
    return prisma.historico.findMany();
}

export
    //Excluir um registro
    async function removeHistoricoM(id) {
    return prisma.historico.delete({
        where: {
            id: id,
        },
    });
}