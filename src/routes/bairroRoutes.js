// BairroRoutes.js - Routes
import { Router } from 'express';
const router = Router();
import { createBairroCT, getBairrosCT } from '../controllers/bairroController.js';

router.post('/bairro', createBairroCT);
router.get('/bairro', getBairrosCT);

export default router;