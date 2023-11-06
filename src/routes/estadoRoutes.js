// estadoRoutes.js - Routes
import { Router } from 'express';
const router = Router();
import { createEstado, getAllEstados, getOneEstado, updateEstado , removeEstado} from '../controllers/estadoController.js';

router.post('/estado', createEstado);
router.get('/estado', getAllEstados);
router.get('/estado/id', getOneEstado); //tem como parametro o id.
router.put('/estado',  updateEstado); // tem como parametro id e nomeEstado e siglaEstado
router.delete('/estado', removeEstado); //tem como parametro o id.

export default router;