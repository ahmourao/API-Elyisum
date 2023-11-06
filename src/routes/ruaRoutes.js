// ruaRoutes.js - Routes
import { Router } from 'express';
const router = Router();
import { createRuaCT, getRuasCT } from '../controllers/ruaController.js';

router.post('/rua', createRuaCT);
router.get('/rua', getRuasCT);

export default router;