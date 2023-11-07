// alunoController.js - Controller
import { createAlunoM, getAllAlunoM, removeAlunoM} from '../models/aluno.js';


export async function createAluno(req, res) {
    const data = req.body;
    try {
        const aluno = await createAlunoM(data);
        res.json(aluno);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Erro ao criar o aluno' });
    } 
}

//Listar todos os registros
export async function getAllAlunos(req, res) {
    try {
        const aluno = await getAllAlunoM();
        res.json(aluno);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar todos os alunos' });
    }
}

//Excluir um registro
export async function removeAluno(req, res) {
    const id = parseInt(req.query.id);
    try {
        const aluno = await removeAlunoM(id);
        res.json(aluno);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Erro em deletar uma aluno' });
    }
}