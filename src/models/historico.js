// historico.js - Model
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();



export
    //Listar tudo
    async function getAllHistoricosM() {
    return prisma.Historico.findMany();
}

export
    //Excluir um registro
    async function removeHistoricoM(id) {
    return prisma.Historico.delete({
        where: {
            idHistorico: id,
        },
    });
}