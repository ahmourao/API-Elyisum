// estadoRoutes.js - Routes
import { Router } from 'express';
const router = Router();
import { createEstadoCT, getEstadosCT } from '../controllers/estadoController.js';

router.post('/estado', createEstadoCT);
router.get('/estado', getEstadosCT);

export default router;