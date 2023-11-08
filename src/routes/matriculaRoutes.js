// matriculaRoutes.js - Routes
import { Router } from 'express';
const router = Router();
import { getAllMatriculas, createMatricula, removeMatricula, updateSituacao, updateNotas, boletim} from '../controllers/matriculaController.js';

router.get('/matricula',  getAllMatriculas);
router.post('/matricula', createMatricula);
router.delete('/matricula', removeMatricula);
router.put('/matricula/situacao', updateSituacao);
router.put('/matricula/notas', updateNotas);
router.get('/matricula/boletim', boletim);

export default router;