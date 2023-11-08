import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export
    //Listar tudo
    async function getAllHistoricoDisciplinasM() {
    return prisma.historicoDisciplinas.findMany();
}