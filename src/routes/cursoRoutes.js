// cursoRoutes.js - Routes
import { Router } from 'express';
const router = Router();
import { createCursoCT, getCursosCT } from '../controllers/cursoController.js';

router.post('/cursos', createCursoCT);
router.get('/cursos', getCursosCT);

export default router;