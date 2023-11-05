// departamentoRoutes.js - Routes
import { Router } from 'express';
const router = Router();
import { createDepartamentoCT, getDepartamentosCT } from '../controllers/departamentoController.js';

router.post('/departamentos', createDepartamentoCT);
router.get('/departamentos', getDepartamentosCT);

export default router;