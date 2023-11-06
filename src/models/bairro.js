// Bairro.js - Model
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function createBairroM(data) {
    return prisma.Bairro.create({ data });
}
export async function getBairrosM() {
    return prisma.Bairro.findMany({
        include: {
            cidade: {
                include:{
                    estado: true,
                },
            },
        },
    });
}