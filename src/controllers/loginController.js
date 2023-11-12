// loginController.js - Controller
import { validationResult } from 'express-validator';
import { getAllLoginsM, updateLoginM, removeLoginM, validarLoginM } from '../models/login.js';


//Listar todos os registros
export async function getAllLogins(req, res) {
    try {
        const login = await getAllLoginsM();
        res.json(login);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar todos os logins' });
    }
}

//Atualizar um registro
export async function updateLogin(req, res) {
    const id = parseInt(req.query.id);
    const usuario = req.query.usuario;
    const senha = req.query.senha;
    try {
        const Login = await updateLoginM(id, usuario, senha);
        res.json(Login);
    } catch (error) {
        res.status(500).json({ error: 'Erro em atualizar o Login' });
    }
}

//Excluir um registro
export async function removeLogin(req, res) {
    const id = parseInt(req.query.id);
    try {
        const Login = await removeLoginM(id);
        res.json(Login);
    } catch (error) {
        res.status(500).json({ error: 'Erro em deletar um Login' });
    }

}

export async function validarLogin(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    let { username, password } = req.body;
    username = parseInt(username);
    try {
        // Consulte o banco de dados para verificar se o usuário existe
        const user = await validarLoginM(username, password);
        if (user && user.senha === password) {
            return res.json({ authenticated: true });
        } else {
            return res.json({ authenticated: false });
        }
    } catch (error) {
        console.error('Erro ao verificar o usuário:', error);
        return res.status(500).json({ error: 'Erro interno do servidor' });
    }
}