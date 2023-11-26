// alunoController.js - Controller
import { createAlunoM, getAllAlunoM, removeAlunoM, trancarMatriculaM, ativarMatriculaM , getOneAlunoM} from '../models/aluno.js';


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

//Listar um registro
export async function getOneAluno(req, res) { 
    const id = parseInt(req.query.id);
    try {
        const aluno = await getOneAlunoM(id);
        res.json(aluno);
    } catch (error) {
        res.status(500).json({ error: 'Erro em listar um aluno' });
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

export async function trancarMatricula(req, res) {
    const id = parseInt(req.query.id);
    try {
        const aluno = await trancarMatriculaM(id);
        res.json(aluno);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Erro ao trancar matricula do aluno' });
    } 
}

export async function ativarMatricula(req, res) {
    const id = parseInt(req.query.id);
    try {
        const aluno = await ativarMatriculaM(id);
        res.json(aluno);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Erro ao trancar matricula do aluno' });
    } 
}

export async function alterarCadastro(req, res){
    const {telefoneAluno, cepAluno, ruaAluno, numeroAluno, bairroAluno, complementoAluno, cidadeAluno, siglaAluno} = req.body;

}