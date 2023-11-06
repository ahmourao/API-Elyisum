
// aluno.js - Model
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export
    //Create
    async function createAlunoM(data) {
    return prisma.Aluno.create({ data });
}