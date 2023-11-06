// BairroController.js - Controller
import { createBairroM, getAllBairrosM, getSingleNameBairroM, getSingleBairroM} from '../models/bairro.js';

import chalk from 'chalk';


//Criar um bairro
export async function createBairro(req, res) {
    const data = req.body;
    //Conteúdo recebido do cliente 
    try {
        const Bairro = await createBairroM(data);
        res.json(Bairro);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar o bairro' });
    }
}

//Listar todos os bairros
export async function getAllBairros(req, res) {
    try {
        const Bairros = await getAllBairrosM();
        res.json(Bairros);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar os bairros' });
    }
}

//listar um pelo id
export async function getSingleBairro(req, res) {
    const id = parseInt(req.query.id);
    try {
        console.log(chalk.white.bgGray("Sending request getSingleBairro... "));
        const Bairro = await getSingleBairroM(id);
        res.json(Bairro);
    } catch (error) {
        console.log(chalk.black.bgRed("Request fail"));
        res.status(500).json({ error: 'Erro em buscar um bairro' });
    }

}

//listar um pelo nome
export async function getSingleNameBairro(req, res) {
    const nome = req.query.nome;
    try {
        console.log(chalk.white.bgGray("Sending request getSingleNameBairro... "));
        const Bairro = await getSingleNameBairroM(nome);
        res.json(Bairro);
    } catch (error) {
        console.log(chalk.black.bgRed("Request fail"));
        res.status(500).json({ error: 'Erro em buscar uma única Bairro' });
    }

}
