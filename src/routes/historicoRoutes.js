// historicoRoutes.js - Routes
import { Router } from 'express';
const router = Router();
import {  getAllHistorico, removeHistorico} from '../controllers/historicoController.js';

router.get('/historico',  getAllHistorico);
router.delete('/historico', removeHistorico);


export default router;