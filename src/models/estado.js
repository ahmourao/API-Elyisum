// estado.js - Model
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export
    //Criar um registro
    async function createEstadoM(data) {
    return prisma.Estado.create({ data });
}

export
    //Listar tudo
    async function getAllEstadosM() {
    return prisma.Estado.findMany();
}

export
    //Listar um
    async function getOneEstadoM(id) {
    return prisma.Estado.findUnique({
        where: {
            idEstado: id
        },
    });
}


export
    //Atualizar um registro
    async function updateEstadoM(id, nomeEstado, siglaEstado) {
    return prisma.Estado.update({
        where: {
            idEstado: id,
        },
        data: {
            nomeEstado: nomeEstado,
            siglaEstado: siglaEstado,
        },
    });
}

export
    //Excluir um registro
    async function removeEstadoM(id) {
    return prisma.Estado.delete({
        where: {
            idEstado: id,
        },
    });
}