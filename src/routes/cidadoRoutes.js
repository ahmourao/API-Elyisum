// cidadeRoutes.js - Routes
import { Router } from 'express';
const router = Router();
import { createCidadeCT, getCidadesCT, updateCidadeCT } from '../controllers/cidadeController.js';

router.post('/cidade', createCidadeCT);
router.get('/cidade', getCidadesCT);
router.put('/cidade', updateCidadeCT);
export default router;