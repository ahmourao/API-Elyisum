// cursoRoutes.js - Routes
import { Router } from 'express';
const router = Router();
import { createCursoCT, getCursosCT } from '../controllers/cursoController.js';

router.post('/curso', createCursoCT);
router.get('/curso', getCursosCT);

export default router;