// departamento.js
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export
    //Create
    async function createDepartamentoM(data) {
    return prisma.departamento.create({ data });
}
export
    //Listar
    async function getAllDepartamentosaM() {
    return prisma.departamento.findMany();
}

export
    //Read one
    async function getOneDepartamentoM(id) {
    return prisma.Departamento.findUnique({
        where: {
            idDepartamento: id
        },
    });
}

export
    //Atualizar um registro
    async function updateDepartamentoM(id, nomeDepartamento) {
    return prisma.Departamento.update({
        where: {
            idDepartamento: id,
        },
        data: {
            nomeDepartamento: nomeDepartamento,
        },
    });
}

export
    //Excluir um registro
    async function removeDepartamentoM(id) {
    return prisma.Departamento.delete({
        where: {
            idDepartamento: id,
        },
    });
}