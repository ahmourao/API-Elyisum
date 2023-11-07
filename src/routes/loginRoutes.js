// loginRoutes.js - Routes
import { Router } from 'express';
const router = Router();
import { getAllLogins, removeLogin, updateLogin } from '../controllers/loginController.js';

router.get('/login', getAllLogins);
router.put('/login', updateLogin); //tem como parametros: id, usuario e senha
router.delete('/login',  removeLogin);

export default router;