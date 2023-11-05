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
    async function getCursosM() {
    return prisma.Curso.findMany();
}