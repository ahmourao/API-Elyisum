// EstadoController.js - Controller
import { createEstadoM, getEstadosM } from '../models/estado.js';

export async function createEstadoCT(req, res) {
    const EstadoData = req.body;
    //Conteúdo recebido do cliente 
    try {
        const Estado = await createEstadoM(EstadoData);
        res.json(Estado);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar o estado' });
    }
}
export async function getEstadosCT(req, res) {
    try {
        const Estados = await getEstadosM();
        res.json(Estados);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar os estados' });
    }
}