// cursoController.js - Controller
import { createCursoM, getCursosM } from '../models/curso.js';

export async function createCursoCT(req, res) {
    const cursoData = req.body;
    //Conteúdo recebido do cliente 
    try {
        const curso = await createCursoM(cursoData);
        res.json(curso);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar o curso' });
    }
}
export async function getCursosCT(req, res) {
    try {
        const cursos = await getCursosM();
        res.json(cursos);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar os cursos' });
    }
}