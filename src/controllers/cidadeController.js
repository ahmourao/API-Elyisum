// cidadeController.js - Controller
import { createCidadeM, getAllCidadesM, updateCidadeM, getOneCidadeM, removeCidadeM} from '../models/cidade.js';
import chalk from 'chalk';

//Criar um registro
export async function createCidade(req, res) {
    const data = req.body;
    //Conteúdo recebido do cliente 
    try {
        console.log(chalk.white.bgGray("Sending request createCidade"));
        const Cidade = await createCidadeM(data);
        res.json(Cidade);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar o cidade' });
    }
}

//Listar tudo
export async function getAllCidades(req, res) {
    try {
        const Cidades = await getAllCidadesM();
        res.json(Cidades);
    } catch (error) {
        res.status(500).json({ error: 'Erro em buscar as cidades' });
    }
}

//listar um
export async function getOneCidade(req, res) {
    const id = parseInt(req.query.id);
    try {
        console.log(chalk.white.bgGray("Sending request getSingleCidade... "));
        const cidade = await getOneCidadeM(id);
        res.json(cidade);
    } catch (error) {
        console.log(chalk.black.bgRed("Request fail"));
        res.status(500).json({ error: 'Erro em buscar uma única cidade' });
    }

}

//Atualizar um registro
export async function updateCidade(req, res) {
    const id = parseInt(req.query.id);
    const nomeCidade = req.query.nomeCidade;
    const idEstado = parseInt(req.query.idEstado);
    try {
        const cidade = await updateCidadeM(id, nomeCidade, idEstado);
        res.json(cidade);
    } catch (error) {
        res.status(500).json({ error: 'Erro em atualizar a cidade' });
    }

}

//Excluir um registro
export async function removeCidade(req, res) {
    const id = parseInt(req.query.id);
    try {
        const cidade = await removeCidadeM(id);
        res.json(cidade);
    } catch (error) {
        res.status(500).json({ error: 'Erro em deletar a cidade' });
    }

}


