// cursoRoutes.js - Routes
import { Router } from 'express';
const router = Router();
import { createCurso, getAllCursos, getOneCurso, updateCurso, removeCurso } from '../controllers/cursoController.js';

router.post('/curso', createCurso);
router.get('/curso', getAllCursos);
router.get('/curso/id', getOneCurso);
router.put('/curso', updateCurso); // tem como parametro o id, nomeCurso e idDepartamento
router.delete('/curso', removeCurso); //tem como parametro o id.
export default router;