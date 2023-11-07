// alunoRoutes.js - Routes
import { Router } from 'express';
const router = Router();
import { createAluno, getAllAlunos, removeAluno} from '../controllers/alunoController.js';

router.post('/aluno', createAluno);
router.get('/aluno', getAllAlunos);
router.delete('/aluno', removeAluno);


export default router;