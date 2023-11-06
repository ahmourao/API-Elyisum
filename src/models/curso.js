// curso.js - Model
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export
    //Create
    async function createCursoM(data) {
    return prisma.Curso.create({ data });
}

export
    //Listar
    async function getAllCursosM() {
    return prisma.Curso.findMany();
}

export
    //Read one
    async function getOneCursoM(id) {
    return prisma.Curso.findUnique({
        where: {
            idCurso: id
        },
    });
}

export
    //Atualizar um registro
    async function updateCursoM(id, nomeCurso, idDepartamento) {
    return prisma.Curso.update({
        where: {
            idCurso: id,
        },
        data: {
            nomeCurso: nomeCurso,
            idDepartamento: idDepartamento,
        },
    });
}

export
    //Excluir um registro
    async function removeCursoM(id) {
    return prisma.Curso.delete({
        where: {
            idCurso: id,
        },
    });
}