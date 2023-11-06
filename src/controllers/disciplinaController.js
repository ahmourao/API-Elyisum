// disciplinaController.js - Controller
import { createDisciplinaM, getAllDisciplinasM, getOneDisciplinaM, updateDisciplinaM, removeDisciplinaM } from '../models/disciplina.js';

export async function createDisciplina(req, res) {
    const data = req.body;
    //Conteúdo recebido do cliente 
    try {
        const disciplina = await createDisciplinaM(data);
        res.json(disciplina);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar a disciplina' });
    }
}
export async function getAllDisciplinas(req, res) {
    try {
        const disciplinas = await getAllDisciplinasM();
        res.json(disciplinas);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar as disciplinas' });
    }
}

//Buscar um registro por ID
export async function getOneDisciplina(req, res) {
    const id = parseInt(req.query.id);
    try {
        const Disciplina = await getOneDisciplinaM(id);
        res.json(Disciplina);
    } catch (error) {
        res.status(500).json({ error: 'Erro em buscar um a disciplina' });
    }

}

//Atualizar um registro
export async function updateDisciplina(req, res) {
    const id = parseInt(req.query.id);
    const nomeDisciplina = req.query.nomeDisciplina;
    const numeroTurma = req.query.numeroTurma;
    const cargaHoraria = req.query.cargaHoraria;
    const descricaoCurricular = req.query.descricaoCurricular;
    const semestre = req.query.semestre;
    const idDepartamento = parseInt(req.query.idDepartamento);
    const idCurso = parseInt(req.query.idCurso)
    try {
        const Disciplina = await updateDisciplinaM(id, nomeDisciplina, numeroTurma, cargaHoraria,  descricaoCurricular, semestre, idDepartamento, idCurso);
        res.json(Disciplina);
    } catch (error) {
        res.status(500).json({ error: 'Erro em atualizar o registro do Disciplina' });
    }
}

//Excluir um registro
export async function removeDisciplina(req, res) {
    const id = parseInt(req.query.id);
    try {
        const Disciplina = await removeDisciplinaM(id);
        res.json(Disciplina);
    } catch (error) {
        res.status(500).json({ error: 'Erro em deletar uma Disciplina' });
    }
}