// alunoRoutes.js - Routes
import { Router } from 'express';
const router = Router();
import { createAluno, getAllAlunos, getOneAluno, updateAluno, removeAluno } from '../controllers/alunoController.js';

router.post('/aluno', createAluno);
router.get('/aluno', getAllAlunos);
// router.get('/aluno/id', getOneAluno);
// router.put('/aluno', updateAluno); // tem como parametro o id, nomeAluno, numeroTurma, cargaHoraria, descricaoCurricular, semestre, idDepartamento e idCurso
// router.delete('/aluno', removeAluno); //tem como parametro o id.

export default router;