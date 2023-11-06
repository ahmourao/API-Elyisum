// estado.js - Model
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export
    //Create
    async function createEstadoM(data) {
    return prisma.Estado.create({ data });
}
export
    //Listar
    async function getEstadosM() {
    return prisma.Estado.findMany();
}