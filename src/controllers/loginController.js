// loginController.js - Controller
import { getAllLoginsM, updateLoginM, removeLoginM} from '../models/login.js';


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