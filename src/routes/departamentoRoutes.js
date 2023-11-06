// departamentoRoutes.js - Routes
import { Router } from 'express';
const router = Router();
import { createDepartamento, getAllDepartamentos,getOneDepartamento, updateDepartamento, removeDepartamento } from '../controllers/departamentoController.js';

router.post('/departamento', createDepartamento);
router.get('/departamento', getAllDepartamentos);
router.get('/departamento/id', getOneDepartamento);
router.put('/departamento', updateDepartamento); // tem como parametro o id e o nome 
router.delete('/departamento', removeDepartamento); //tem como parametro o id.

export default router;