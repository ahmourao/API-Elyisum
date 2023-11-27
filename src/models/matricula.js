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

    //processo para atualização do número da turma
    const disciplina = await prisma.disciplina.findUnique({
        where: {
            idDisciplina: matricula.idDisciplina,
        },
    });

    let numeroTurma = disciplina.numeroTurma;
    if (numeroTurma <= 30) {
        numeroTurma = numeroTurma + 1;
    }
    await prisma.disciplina.update({
        where: {
            idDisciplina: matricula.idDisciplina,
        },
        data: {
            numeroTurma: numeroTurma,
        },
    });

    // cria a relação da disciplina no historico
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
        // select: {
        //     idMatricula: true,
        //     disciplina: {
        //         select: {
        //             nomeDisciplina: true,
        //         },
        //     },
        //     aluno: {
        //         select: {
        //             nomeAluno: true,
        //         },
        //     },
        //     situacao: true,
        //     nota1: true,
        //     nota2: true,
        //     media: true,
        // },
    });
}

export
    //Listar tudo BOLETIM
    async function boletimM(id) {
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
    const relacaoDeMatriculas = relacao.map(registro => registro.idMatricula);
    const relacaoDeDisciplinas = await prisma.matricula.findMany({
        where: {
            idMatricula: {
                in: relacaoDeMatriculas,
            }, 
            situacao: "Cursando",
        },
        include: {
            disciplina: {
                select: {
                    nomeDisciplina: true,
                }
            }
        }
    });
    return relacaoDeDisciplinas;
}

export
    //Excluir um registro
    async function removeMatriculaM(id) {

    const matriculaAux = await prisma.matricula.findUnique({
        where: {
            idMatricula: id,
        },
    });

    const aluno = await prisma.aluno.findUnique({
        where: {
            ra: matriculaAux.ra,
        },
    });

    await prisma.historicoDisciplinas.delete({
        where: {
            idHistoricoDisciplina: {
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

    return matricula;
}

export
    //Update
    async function updateSituacaoM(id, situacao) {
    const matricula = await prisma.matricula.update({
        where: {
            idMatricula: id,
        },
        data: {
            situacao: situacao,
        },
    });
    return matricula;
}

// export
//     //Update
//     async function updateAllSituacaoM(id, situacao) {
//     const matricula = await prisma.matricula.updateMany({
//         data: {
//             situacao: situacao,
//         },
//     });
//     return matricula;
// }

export
    //Update
    async function updateNotasM(id, nota1, nota2, frequencia) {

    let media = (nota1 + nota2) / 2;

    const matricula = await prisma.matricula.update({
        where: {
            idMatricula: id,
        },
        data: {
            nota1: nota1,
            nota2: nota2,
            media: parseFloat(media.toFixed(1)),
            frequencia: frequencia,
        },
    });
    return matricula;
}

