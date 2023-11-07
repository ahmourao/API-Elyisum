// boletimController.js
import { getAllBoletimsM,  removeBoletimM} from '../models/boletim.js';


//Listar todos os registros
export async function getAllBoletims(req, res) {
    try {
        const boletim = await  getAllBoletimsM();
        res.json(boletim);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar todos os boletims' });
    }
}

//Excluir um registro
export async function removeBoletim(req, res) {
    const id = parseInt(req.query.id);
    try {
        const Boletim = await removeBoletimM(id);
        res.json(Boletim);
    } catch (error) {
        res.status(500).json({ error: 'Erro em deletar um boletim' });
    }

}