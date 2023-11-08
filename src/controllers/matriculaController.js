// matriculaController.js - Controller
import { createMatriculaM, getAllMatriculasM, removeMatriculaM} from '../models/matricula.js';


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