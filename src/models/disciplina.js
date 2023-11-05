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
    async function getDisciplinasM() {
    return prisma.disciplina.findMany();
}