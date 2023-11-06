// disciplina.js - Model
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export
    //Create
    async function createDisciplinaM(data) {
    return prisma.disciplina.create({ data });
}
export
    //Listar
    async function getAllDisciplinasM() {
    return prisma.disciplina.findMany({
        select:{
            idDisciplina: true,
            nomeDisciplina: true,
            semestre: true, 
            departamento:{
                select:{
                    nomeDepartamento: true, 
                }
            },
            curso:{
                select: {
                    nomeCurso: true, 
                }
            }
        }
    });
}

export
    //Read one
    async function getOneDisciplinaM(id) {
    return prisma.Disciplina.findUnique({
        where: {
            idDisciplina: id
        },
    });
}

export
    //Atualizar um registro
    async function updateDisciplinaM(id, nomeDisciplina, numeroTurma, cargaHoraria, descricaoCurricular, semestre, idDepartamento, idCurso) {
    return prisma.Disciplina.update({
        where: {
            idDisciplina: id,
        },
        data: {
            nomeDisciplina: nomeDisciplina,
            numeroTurma: numeroTurma,
            cargaHoraria: cargaHoraria,
            descricaoCurricular: descricaoCurricular,
            semestre: semestre,
            idDepartamento: idDepartamento,
            idCurso: idCurso,
        },
    });
}

export
    //Excluir um registro
    async function removeDisciplinaM(id) {
    return prisma.Disciplina.delete({
        where: {
            idDisciplina: id,
        },
    });
}