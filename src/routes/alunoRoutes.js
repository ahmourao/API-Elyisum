// alunoRoutes.js - Routes
import { Router } from 'express';
const router = Router();
import { createAluno, getAllAlunos, removeAluno, trancarMatricula, ativarMatricula, getOneAluno} from '../controllers/alunoController.js';

router.post('/aluno', createAluno);

router.delete('/aluno', removeAluno);

router.put('/aluno/trancar', trancarMatricula);

router.put('/aluno/ativar', ativarMatricula);

router.get('/aluno/tudo', getAllAlunos);
router.get("/aluno", getOneAluno);


export default router;