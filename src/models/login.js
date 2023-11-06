
// login.js - Model
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export
    //Create
    async function createLoginM(data) {
    return prisma.Login.create({ data });
}