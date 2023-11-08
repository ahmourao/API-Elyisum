// aluno.js - Model
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Função para gerar uma senha alfanumérica aleatória
function generateRandomPassword(length) {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let password = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    return password;
}

export
    //Create
    async function createAlunoM(data) {
    const aluno = await prisma.Aluno.create({ data });
    const newPassword = generateRandomPassword(5);
    const login = await prisma.Login.create({
        data: {
            usuario: aluno.ra,
            senha: newPassword,
        },
    });

    const historico = await prisma.Historico.create();

    await prisma.aluno.update({
        where: {
            ra: aluno.ra,
        },
        data: {
            idLogin: login.idLogin,
            idHistorico: historico.idHistorico
        },
    });
    return aluno;
}


export
    //Listar tudo
    async function getAllAlunoM() {
    return prisma.Aluno.findMany({
        select:{
            ra: true, 
            nomeAluno: true, 
            estado:{
                select:{
                    nomeEstado: true, 
                },
            }, 
            cidade:{
                select: {
                    nomeCidade: true,
                },
            },
            curso: {
                select: {
                    nomeCurso: true,
                },
            },
            login: {
                select: {
                    usuario: true, 
                    senha: true,
                },
            }, 
            historico: true,
        }
    });
}

export
    //Excluir um registro
    async function removeAlunoM(id) {
    const aluno = await prisma.Aluno.delete({
        where: {
            ra: id,
        },
    });
    await prisma.Login.delete({
        where: {
            usuario: id,
        },
    });
    await prisma.Historico.delete({
        where:{
            idHistorico: aluno.idHistorico,
        }
    })
    return aluno;
}