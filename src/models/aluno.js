
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
    const login = await prisma.login.create({
        data: {
            usuario: aluno.ra,
            senha: newPassword,
        },
    });
    await prisma.aluno.update({
        where: {
            ra: aluno.ra,
        }, 
        data: {
            idLogin: login.idLogin,
        },
    });
    return aluno;
}


// export
//     //atualizar só o login
//     async function updateLoginAlunoM(ra, idlogin) {
//     return prisma.Aluno.update({
//         where: {
//             ra: ra,
//             idLogin: idlogin,
//         },
//     });
// }

export
    //Listar tudo
    async function getAllAlunoM() {
    return prisma.Aluno.findMany();
}

export
    //Excluir um registro
    async function removeAlunoM(id) {
    return prisma.Aluno.delete({
        where: {
            ra: id,
        },
    });
}