// departamentoController.js
import { createDepartamentoM, getDepartamentosaM } from '../models/departamento.js';

export async function createDepartamentoCT(req, res) {
    const departamentoData = req.body;
    try {
        const departamento = await createDepartamentoM(departamentoData);
        res.json(departamento);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar o departamento' });
    }
}
export async function getDepartamentosCT(req, res) {
    try {
        const departamentos = await getDepartamentosaM();
        res.json(departamentos);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar os departamentos' });
    }
}