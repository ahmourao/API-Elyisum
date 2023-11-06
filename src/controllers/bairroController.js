// BairroController.js - Controller
import { createBairroM, getBairrosM } from '../models/bairro.js';

export async function createBairroCT(req, res) {
    const BairroData = req.body;
    //Conteúdo recebido do cliente 
    try {
        const Bairro = await createBairroM(BairroData);
        res.json(Bairro);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar o bairro' });
    }
}
export async function getBairrosCT(req, res) {
    try {
        const Bairros = await getBairrosM();
        res.json(Bairros);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar os bairros' });
    }
}