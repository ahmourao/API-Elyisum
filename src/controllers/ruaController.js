// ruaController.js - Controller
import { createRuaM, getAllRuasM, getOneRuaM, updateRuaM, removeRuaM } from '../models/rua.js';

//Criar um registro
export async function createRua(req, res) {
    const data = req.body;
    //Conteúdo recebido do cliente 
    try {
        const Rua = await createRuaM(data);
        res.json(Rua);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar um novo registro de Rua' });
    }
}

//Listar todos os registros
export async function getAllRuas(req, res) {
    try {
        const Ruas = await getAllRuasM();
        res.json(Ruas);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar as ruas' });
    }
}


//Buscar um registro por ID
export async function getOneRua(req, res) {
    const id = parseInt(req.query.id);
    try {
        const rua = await getOneRuaM(id);
        res.json(rua);
    } catch (error) {
        res.status(500).json({ error: 'Erro em buscar uma rua' });
    }

}

//Atualizar um registro
export async function updateRua(req, res) {
    const id = parseInt(req.query.id);
    const nomeRua = req.query.nomeRua;
    try {
        const Rua = await updateRuaM(id, nomeRua);
        res.json(Rua);
    } catch (error) {
        res.status(500).json({ error: 'Erro em atualizar o registro da Rua' });
    }

}

//Excluir um registro
export async function removeRua(req, res) {
    const id = parseInt(req.query.id);
    try {
        const rua = await removeRuaM(id);
        res.json(rua);
    } catch (error) {
        res.status(500).json({ error: 'Erro em deletar uma rua' });
    }
}