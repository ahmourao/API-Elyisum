// disciplinaController.js - Controller
import { createDisciplinaM, getDisciplinasM } from '../models/disciplina.js';

export async function createDisciplinaCT(req, res) {
    const cursoData = req.body;
    //Conteúdo recebido do cliente 
    try {
        const curso = await createDisciplinaM(cursoData);
        res.json(curso);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar o curso' });
    }
}
export async function getDisciplinasCT(req, res) {
    try {
        const cursos = await getDisciplinasM();
        res.json(cursos);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar os cursos' });
    }
}