// bairroController.js - Controller
import { createBairroM, getAllBairrosM, getOneNameBairroM, getOneBairroM, updateBairroM, removeBairroM} from '../models/bairro.js';

import chalk from 'chalk';


//Criar um registro
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

//Listar todos os registros
export async function getAllBairros(req, res) {
    try {
        const Bairros = await getAllBairrosM();
        res.json(Bairros);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar os bairros' });
    }
}

//Buscar um registro pelo ID
export async function getOneBairro(req, res) {
    const id = parseInt(req.query.id);
    try {
        console.log(chalk.white.bgGray("Sending request getOneBairro... "));
        const Bairro = await getOneBairroM(id);
        res.json(Bairro);
    } catch (error) {
        console.log(chalk.black.bgRed("Request fail"));
        res.status(500).json({ error: 'Erro em buscar um bairro' });
    }

}

//Buscar um registro pelo nome
export async function getOneNameBairro(req, res) {
    const nome = req.query.nome;
    try {
        console.log(chalk.white.bgGray("Sending request getOneNameBairro... "));
        const Bairro = await getOneNameBairroM(nome);
        res.json(Bairro);
    } catch (error) {
        console.log(chalk.black.bgRed("Request fail"));
        res.status(500).json({ error: 'Erro em buscar uma única Bairro' });
    }

}

//Atualizar um registro
export async function updateBairro(req, res) {
    const id = parseInt(req.query.id);
    const nomeBairro = req.query.nomeBairro;
    const idCidade = parseInt(req.query.idCidade);
    try {
        const Bairro = await updateBairroM(id, nomeBairro, idCidade);
        res.json(Bairro);
    } catch (error) {
        res.status(500).json({ error: 'Erro em atualizar o Bairro' });
    }

}

//Excluir um registro
export async function removeBairro(req, res) {
    const id = parseInt(req.query.id);
    try {
        const Bairro = await removeBairroM(id);
        res.json(Bairro);
    } catch (error) {
        res.status(500).json({ error: 'Erro em deletar um Bairro' });
    }

}