// EstadoController.js - Controller
import { createEstadoM, getAllEstadosM, getOneEstadoM, updateEstadoM, removeEstadoM } from '../models/estado.js';

//Criar um registro
export async function createEstado(req, res) {
    const EstadoData = req.body;
    //Conteúdo recebido do cliente 
    try {
        const Estado = await createEstadoM(EstadoData);
        res.json(Estado);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar um estado' });
    }
}

//Listar todos os registros
export async function getAllEstados(req, res) {
    try {
        const Estados = await getAllEstadosM();
        res.json(Estados);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar os estados' });
    }
}

//Buscar um registro por ID
export async function getOneEstado(req, res) {
    const id = parseInt(req.query.id);
    try {
        const estado = await getOneEstadoM(id);
        res.json(estado);
    } catch (error) {
        res.status(500).json({ error: 'Erro em buscar um estado' });
    }

}

//Atualizar um registro
export async function updateEstado(req, res) {
    const id = parseInt(req.query.id);
    const nomeEstado = req.query.nomeEstado;
    const siglaEstado = req.query.siglaEstado;
    try {
        const estado = await updateEstadoM(id, nomeEstado, siglaEstado);
        res.json(estado);
    } catch (error) {
        res.status(500).json({ error: 'Erro em atualizar o estado' });
    }

}

//Excluir um registro
export async function removeEstado(req, res) {
    const id = parseInt(req.query.id);
    try {
        const estado = await removeEstadoM(id);
        res.json(estado);
    } catch (error) {
        res.status(500).json({ error: 'Erro em deletar um estado' });
    }

}