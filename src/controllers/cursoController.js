// cursoController.js - Controller
import { createCursoM, getAllCursosM, getOneCursoM, updateCursoM, removeCursoM} from '../models/curso.js';

//Criar um registro
export async function createCurso(req, res) {
    const cursoData = req.body;
    //Conteúdo recebido do cliente 
    try {
        const curso = await createCursoM(cursoData);
        res.json(curso);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar o curso' });
    }
}

//Listar todos os registros
export async function getAllCursos(req, res) {
    try {
        const cursos = await getAllCursosM();
        res.json(cursos);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar os cursos' });
    }
}

//Buscar um registro por ID
export async function getOneCurso(req, res) {
    const id = parseInt(req.query.id);
    try {
        const Curso = await getOneCursoM(id);
        res.json(Curso);
    } catch (error) {
        res.status(500).json({ error: 'Erro em buscar um Curso' });
    }

}

//Atualizar um registro
export async function updateCurso(req, res) {
    const id = parseInt(req.query.id);
    const nomeCurso = req.query.nomeCurso;
    const idDepartamento = parseInt(req.query.idDepartamento);
    try {
        const Curso = await updateCursoM(id, nomeCurso, idDepartamento);
        res.json(Curso);
    } catch (error) {
        res.status(500).json({ error: 'Erro em atualizar o registro do Curso' });
    }

}

//Excluir um registro
export async function removeCurso(req, res) {
    const id = parseInt(req.query.id);
    try {
        const Curso = await removeCursoM(id);
        res.json(Curso);
    } catch (error) {
        res.status(500).json({ error: 'Erro em deletar um Curso' });
    }
}