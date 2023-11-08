// matriculaRoutes.js - Routes
import { Router } from 'express';
const router = Router();
import { getAllMatriculas, createMatricula, removeMatricula} from '../controllers/matriculaController.js';

router.get('/matricula',  getAllMatriculas);
router.post('/matricula', createMatricula);
router.delete('/matricula', removeMatricula);


export default router;