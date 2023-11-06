// bairroRoutes.js - Routes
import { Router } from 'express';
const router = Router();
import { createBairro, getAllBairros, getSingleBairro, getSingleNameBairro} from '../controllers/bairroController.js';

router.post('/bairro', createBairro);
router.get('/bairro', getAllBairros);
router.get('/bairro/id', getSingleBairro);
router.get('/bairro/nome', getSingleNameBairro); 
export default router;