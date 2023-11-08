// historicoDisciplinasRoutes.js - Routes
import { Router } from 'express';
const router = Router();
import { getAllHistoricoDisciplinas } from '../controllers/historicoDisciplinasController.js';

router.get('/histDisciplinas',  getAllHistoricoDisciplinas);

export default router;