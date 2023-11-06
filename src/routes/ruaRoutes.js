// ruaRoutes.js - Routes
import { Router } from 'express';
const router = Router();
import { createRua, getAllRuas, getOneRua, updateRua, removeRua} from '../controllers/ruaController.js';

router.post('/rua', createRua);
router.get('/rua', getAllRuas);
router.get('/rua/id', getOneRua); //tem como parametro o id.
router.put('/rua', updateRua); // tem como parametro id e nomeRua
router.delete('/rua', removeRua); //tem como parametro o id.
export default router;