// alunoController.js - Controller
import { createAlunoM, getAllAlunosM, getOneAlunoM, updateAlunoM, removeAlunoM } from '../models/aluno.js';

export async function createAluno(req, res) {
    const data = req.body;
    //Conteúdo recebido do cliente 
    try {
        const aluno = await createAlunoM(data);
        res.json(aluno);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar a aluno' });
    }
}