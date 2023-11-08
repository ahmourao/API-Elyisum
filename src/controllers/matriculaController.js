// matriculaController.js - Controller
import { createMatriculaM, getAllMatriculasM, removeMatriculaM, updateSituacaoM, updateNotasM, boletimM} from '../models/matricula.js';


export async function createMatricula(req, res) {
    const data = req.body;
    try {
        const Matricula = await createMatriculaM(data);
        res.json(Matricula);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Erro ao criar a Matricula' });
    } 
}

//Listar todos os registros
export async function getAllMatriculas(req, res) {
    try {
        const Matricula = await getAllMatriculasM();
        res.json(Matricula);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar todas as Matriculas' });
    }
}

//Listar todos os registros - BOLETIM
export async function boletim(req, res) {
    const id = parseInt(req.query.id);
    try {
        const Matricula = await boletimM(id);
        res.json(Matricula);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar todas as Matriculas' });
    }
}

//Excluir um registro
export async function removeMatricula(req, res) {
    const id = parseInt(req.query.id);
    try {
        const matricula = await removeMatriculaM(id);
        res.json(matricula);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Erro em deletar uma matricula' });
    }
}

//Atualizar um registro
export async function updateSituacao(req, res) {
    const id = parseInt(req.query.id);
    const situacao = req.query.situacao;
    try {
        const matricula = await updateSituacaoM(id, situacao);
        res.json(matricula);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Erro em atualizar a situação de uma matrícula' });
    }
}

//Atualizar um registro
export async function updateNotas(req, res) {
    const id = parseInt(req.query.id);
    const nota1 = parseFloat(req.query.nota1);
    const nota2 = parseFloat(req.query.nota2);
    const frequencia = parseFloat(req.query.frequencia);
    try {
        const matricula = await updateNotasM(id, nota1, nota2, frequencia);
        res.json(matricula);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Erro em atualizar a situação de uma matrícula' });
    }
}