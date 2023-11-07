// boletimRoutes.js - Routes
import { Router } from 'express';
const router = Router();
import { getAllBoletims, removeBoletim} from '../controllers/boletimController.js';

router.get('/boletim', getAllBoletims);
router.delete('/boletim', removeBoletim);


export default router;