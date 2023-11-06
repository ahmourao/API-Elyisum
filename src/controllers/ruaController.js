// RuaController.js - Controller
import { createRuaM, getRuasM } from '../models/rua.js';

export async function createRuaCT(req, res) {
    const RuaData = req.body;
    //Conteúdo recebido do cliente 
    try {
        const Rua = await createRuaM(RuaData);
        res.json(Rua);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar a rua' });
    }
}
export async function getRuasCT(req, res) {
    try {
        const Ruas = await getRuasM();
        res.json(Ruas);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar as ruas' });
    }
}