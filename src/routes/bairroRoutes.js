// bairroRoutes.js - Routes
import { Router } from 'express';
const router = Router();
import { createBairro, getAllBairros, getOneBairro, getOneNameBairro, updateBairro, removeBairro} from '../controllers/bairroController.js';

router.post('/bairro', createBairro);
router.get('/bairro', getAllBairros);
router.get('/bairro/id', getOneBairro);
router.get('/bairro/nome', getOneNameBairro); 
router.put('/bairro',  updateBairro); // tem como parametro id e nomebairro e siglabairro
router.delete('/bairro', removeBairro); //tem como parametro o id.
export default router;