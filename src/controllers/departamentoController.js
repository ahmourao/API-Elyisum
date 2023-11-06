// departamentoController.js
import { createDepartamentoM, getAllDepartamentosaM, getOneDepartamentoM, updateDepartamentoM, removeDepartamentoM} from '../models/departamento.js';

//Criar um registro
export async function createDepartamento(req, res) {
    const data = req.body;
    try {
        const departamento = await createDepartamentoM(data);
        res.json(departamento);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar o departamento' });
    }
}

//Listar todos os registro
export async function getAllDepartamentos(req, res) {
    try {
        const departamentos = await getAllDepartamentosaM();
        res.json(departamentos);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar os departamentos' });
    }
}


//Buscar um registro por ID
export async function getOneDepartamento(req, res) {
    const id = parseInt(req.query.id);
    try {
        const Departamento = await getOneDepartamentoM(id);
        res.json(Departamento);
    } catch (error) {
        res.status(500).json({ error: 'Erro em buscar um Departamento' });
    }

}

//Atualizar um registro
export async function updateDepartamento(req, res) {
    const id = parseInt(req.query.id);
    const nomeDepartamento = req.query.nomeDepartamento;
    try {
        const Departamento = await updateDepartamentoM(id, nomeDepartamento);
        res.json(Departamento);
    } catch (error) {
        res.status(500).json({ error: 'Erro em atualizar o registro do Departamento' });
    }

}

//Excluir um registro
export async function removeDepartamento(req, res) {
    const id = parseInt(req.query.id);
    try {
        const Departamento = await removeDepartamentoM(id);
        res.json(Departamento);
    } catch (error) {
        res.status(500).json({ error: 'Erro em deletar uma Departamento' });
    }
}