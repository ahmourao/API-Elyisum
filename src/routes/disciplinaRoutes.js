// disciplinaRoutes.js - Routes
import { Router } from 'express';
const router = Router();
import { createDisciplina, getAllDisciplinas, getOneDisciplina, updateDisciplina, removeDisciplina } from '../controllers/disciplinaController.js';

router.post('/disciplina', createDisciplina);
router.get('/disciplina', getAllDisciplinas);
router.get('/disciplina/id', getOneDisciplina);
router.put('/disciplina', updateDisciplina); // tem como parametro o id, nomeDisciplina, numeroTurma, cargaHoraria, descricaoCurricular, semestre, idDepartamento e idCurso
router.delete('/disciplina', removeDisciplina); //tem como parametro o id.

export default router;