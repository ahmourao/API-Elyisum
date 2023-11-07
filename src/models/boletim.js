// boletim.js - Model
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();



export
    //Listar tudo
    async function getAllBoletimsM() {
    return prisma.Boletim.findMany();
}

export
    //Excluir um registro
    async function removeBoletimM(id) {
    return prisma.Boletim.delete({
        where: {
            idBoletim: id,
        },
    });
}