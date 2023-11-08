// historicoDisciplinasController.js - Controller
import { getAllHistoricoDisciplinasM } from '../models/historicoDisciplinas.js';

//Listar todos os registros
export async function getAllHistoricoDisciplinas(req, res) {
    try {
        const HDisciplinas = await getAllHistoricoDisciplinasM();
        res.json(HDisciplinas);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar todas as HDisciplinas' });
    }
}