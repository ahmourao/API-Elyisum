// Rua.js - Model
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export
    //Create
    async function createRuaM(data) {
    return prisma.Rua.create({ data });
}
export
    //Read
    async function getAllRuasM() {
    return prisma.Rua.findMany();
}

export
    //Read one
    async function getOneRuaM(id) {
    return prisma.Rua.findUnique({
        where: {
            idRua: id
        },
    });
}


export
    //Atualizar um registro
    async function updateRuaM(id, nomeRua) {
    return prisma.Rua.update({
        where: {
            idRua: id,
        },
        data: {
            nomeRua: nomeRua,
        },
    });
}

export
    //Excluir um registro
    async function removeRuaM(id) {
    return prisma.Rua.delete({
        where: {
            idRua: id,
        },
    });
}