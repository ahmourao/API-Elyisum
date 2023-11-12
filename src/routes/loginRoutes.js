// loginRoutes.js - Routes
import { Router } from 'express';
const router = Router();
import { getAllLogins, removeLogin, updateLogin, validarLogin } from '../controllers/loginController.js';
import { body, validationResult } from "express-validator";


router.get('/login', getAllLogins);
router.put('/login', updateLogin); //tem como parametros: id, usuario e senha
router.delete('/login',  removeLogin);
router.post('/authenticate', [
    body('username').notEmpty(),
    body('password').notEmpty()
], validarLogin)
export default router;