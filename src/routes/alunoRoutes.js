// alunoRoutes.js - Routes
import { Router } from 'express';
const router = Router();
import { createAluno, getAllAlunos, removeAluno, trancarMatricula, ativarMatricula} from '../controllers/alunoController.js';

router.post('/aluno', createAluno);
router.get('/aluno', getAllAlunos);
router.delete('/aluno', removeAluno);
router.put('/aluno/trancar', trancarMatricula);
router.put('/aluno/ativar', ativarMatricula);


export default router;