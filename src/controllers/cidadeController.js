// CidadeController.js - Controller
import { createCidadeM, getCidadesM, updateCidadeM } from '../models/cidade.js';

export async function createCidadeCT(req, res) {
    const CidadeData = req.body;
    //Conteúdo recebido do cliente 
    try {
        const Cidade = await createCidadeM(CidadeData);
        res.json(Cidade);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar o cidade' });
    }
}
export async function getCidadesCT(req, res) {
    try {
        const Cidades = await getCidadesM();
        res.json(Cidades);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar os cidades' });
    }
}

export async function updateCidadeCT(req, res) {
    const { id } = req.params;
    const cidadeData = req.body;
    try {
        const updatedCidade = await updateCidadeM(id, cidadeData);
        res.json(updatedCidade);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar o curso' });
    }

}