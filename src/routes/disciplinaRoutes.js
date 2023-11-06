// disciplinaRoutes.js - Routes
import { Router } from 'express';
const router = Router();
import { createDisciplinaCT, getDisciplinasCT } from '../controllers/DisciplinaController.js';

router.post('/disciplina', createDisciplinaCT);
router.get('/disciplina', getDisciplinasCT);

export default router;