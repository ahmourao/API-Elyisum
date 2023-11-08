
// login.js - Model
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export
    //Listar tudo
    async function getAllLoginsM() {
    return prisma.Login.findMany({
        select: {
            usuario: true, 
            senha: true, 
            aluno: {
                select:{
                    nomeAluno: true, 
                }
            }
        }
    });
}

export
    //Atualizar um registro
    async function updateLoginM(id, usuario, senha) {
    return prisma.Login.update({
        where: {
            idLogin: id,
        },
        data: {
            usuario: usuario,
            senha: senha,
        },
    });
}

export
    //Excluir um registro
    async function removeLoginM(id) {
    return prisma.Login.delete({
        where: {
            idLogin: id,
        },
    });
}