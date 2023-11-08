// historicoController.js
import { getAllHistoricosM,  removeHistoricoM, getHistoricoEscolarM} from '../models/historico.js';


//Listar todos os registros
export async function getAllHistorico(req, res) {
    try {
        const historico = await getAllHistoricosM();
        res.json(historico);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar todos os Historicos' });
    }
}

//Listar historico escolar
export async function getHistoricoEscolar(req, res) {
    const id = parseInt(req.query.id);
    try {
        const historico = await getHistoricoEscolarM(id);
        res.json(historico);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar todos os Historicos' });
    }
}

//Excluir um registro
export async function removeHistorico(req, res) {
    const id = parseInt(req.query.id);
    try {
        const historico = await removeHistoricoM(id);
        res.json(historico);
    } catch (error) {
        res.status(500).json({ error: 'Erro em deletar um historico' });
    }

}