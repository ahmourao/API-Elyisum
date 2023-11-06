// cidade.js - Model
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export
    //Create
    async function createCidadeM(data) {
    return prisma.Cidade.create({ data });
}

export
    //Listar
    async function getCidadesM() {
    return prisma.Cidade.findMany({
        include: {
            estado: {
                select: {
                    nomeEstado: true, // Selecionar apenas o atributo 'nome' da tabela Estado
                }
            }
        }
    });
}

export
    //Listar
    async function updateCidadeM(id, data) {
    return prisma.cidade.update({
        where: { id },
        data,
    });
}