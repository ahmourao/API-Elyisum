// bairro.js - Model
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function createBairroM(data) {
    return prisma.Bairro.create({ data });
}
export async function getAllBairrosM() {
    return prisma.Bairro.findMany({
        select: {
            nomeBairro: true, // supondo que você tenha um campo nomeBairro na tabela Bairro
            cidade: {
                select: {
                    nomeCidade: true,
                    estado: {
                        select: {
                            nomeEstado: true,
                        },
                    },
                },
            },
        },
    });
}

export
    //Listar pelo id
    async function getSingleBairroM(id) {
    return prisma.Bairro.findUnique({
        where: { 
            idBairro: id,
        }, 
    });
}

export
    //Listar pelo nome
    async function getSingleNameBairroM(nome) {
    return prisma.Bairro.findUnique({
        where: { 
            nomeBairro: nome,
        }, 
    });
}