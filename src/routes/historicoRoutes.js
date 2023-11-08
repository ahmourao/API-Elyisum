// historicoRoutes.js - Routes
import { Router } from 'express';
const router = Router();
import {  getAllHistorico, removeHistorico, getHistoricoEscolar} from '../controllers/historicoController.js';

router.get('/historico',  getAllHistorico);
router.delete('/historico', removeHistorico);
router.get('/historicoEscolar',  getHistoricoEscolar);

export default router;