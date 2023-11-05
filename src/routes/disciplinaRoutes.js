// disciplinaRoutes.js - Routes
import { Router } from 'express';
const router = Router();
import { createDisciplinaCT, getDisciplinasCT } from '../controllers/DisciplinaController.js';

router.post('/disciplinas', createDisciplinaCT);
router.get('/disciplinas', getDisciplinasCT);

export default router;