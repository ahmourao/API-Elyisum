// cidadeRoutes.js - Routes
import { Router } from 'express';
const router = Router();
import { createCidade, getAllCidades,  getSingleCidade,  updateAllCidade, removeCidade } from '../controllers/cidadeController.js';

router.post('/cidade', createCidade);
router.get('/cidade', getAllCidades); 
router.get('/cidade/id', getSingleCidade); //tem como parametro o id.
router.put('/cidade',  updateAllCidade); // tem como parametro id, nome e idEstado.
router.delete('/cidade', removeCidade); //tem como parametro o id.
export default router;