// departamentoRoutes.js - Routes
import { Router } from 'express';
const router = Router();
import { createDepartamentoCT, getDepartamentosCT } from '../controllers/departamentoController.js';

router.post('/departamento', createDepartamentoCT);
router.get('/departamento', getDepartamentosCT);

export default router;