// Rua.js - Model
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export
    //Create
    async function createRuaM(data) {
    return prisma.Rua.create({ data });
}
export
    //Listar
    async function getRuasM() {
    return prisma.Rua.findMany();
}