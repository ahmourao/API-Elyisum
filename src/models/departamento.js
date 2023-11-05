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
    async function getDepartamentosaM() {
    return prisma.departamento.findMany();
}