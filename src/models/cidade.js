// cidade.js - Model
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export
    //Criar um registro
    async function createCidadeM(data) {
    return prisma.Cidade.create({ data });
}

export
    //Listar tudo
    async function getAllCidadesM() {
    return prisma.Cidade.findMany({
        select: {
            idCidade: true, 
            nomeCidade: true, 
            estado: {
                select: {
                    nomeEstado: true,
                }
            }
        }
    });
}

export
    //Listar um
    async function getOneCidadeM(id) {
    return prisma.cidade.findUnique({
        where: { 
            idCidade: id
        }, 
    });
}

export
    //Atualizar um registro
    async function updateCidadeM(id, nomeCidade, idEstado) {
    return prisma.cidade.update({
        where: { 
            idCidade: id,
        },
        data: {
            nomeCidade: nomeCidade, 
            idEstado: idEstado,
        }
    });
}

export
    //Excluir um registro
    async function removeCidadeM(id) {
    return prisma.cidade.delete({
        where: { 
            idCidade: id,
        },
    });
}