// alunoRoutes.js - Routes
import { Router } from 'express';
const router = Router();
import { createAluno, getAllAlunos, removeAluno, trancarMatricula, ativarMatricula, getOneAluno, alterarCadastro} from '../controllers/alunoController.js';

router.post('/aluno', createAluno);

router.delete('/aluno', removeAluno);

router.put('/aluno/trancar', trancarMatricula);

router.put('/aluno/ativar', ativarMatricula);

router.get('/aluno/tudo', getAllAlunos);
router.get("/aluno", getOneAluno);

router.put('/aluno/alterar', alterarCadastro)

export default router;