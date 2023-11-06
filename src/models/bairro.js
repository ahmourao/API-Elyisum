// bairro.js - Model
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function createBairroM(data) {
    return prisma.Bairro.create({ data });
}
export async function getAllBairrosM() {
    return prisma.Bairro.findMany({
        select: {
            idBairro: true,
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
    async function getOneBairroM(id) {
    return prisma.Bairro.findUnique({
        where: { 
            idBairro: id,
        }, 
    });
}

export
    //Listar pelo nome
    async function getOneNameBairroM(nome) {
    return prisma.Bairro.findUnique({
        where: { 
            nomeBairro: nome,
        }, 
    });
}


export
    //Atualizar um registro
    async function updateBairroM(id, nomeBairro, idCidade) {
    return prisma.Bairro.update({
        where: {
            idBairro: id,
        },
        data: {
            nomeBairro: nomeBairro,
            idCidade: idCidade,
        },
    });
}

export
    //Excluir um registro
    async function removeBairroM(id) {
    return prisma.Bairro.delete({
        where: {
            idBairro: id,
        },
    });
}