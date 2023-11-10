
// import dotenv from 'dotenv';
// dotenv.config();
import chalk from "chalk";
import express from "express";

import cursoRoutes from './src/routes/cursoRoutes.js';
import departamentoRoutes from './src/routes/departamentoRoutes.js';
import disciplinaRoutes from './src/routes/disciplinaRoutes.js';
import estadoRoutes from './src/routes/estadoRoutes.js';
import cidadeRoutes from './src/routes/cidadeRoutes.js';
import bairroRoutes from './src/routes/bairroRoutes.js';
import ruaRoutes from './src/routes/ruaRoutes.js';
import alunoRoutes from './src/routes/alunoRoutes.js';
import loginRoutes from './src/routes/loginRoutes.js';
import historicoRoutes from './src/routes/historicoRoutes.js';
import matriculaRoutes from './src/routes/matriculaRoutes.js';
import historicoDisciplinasRoutes from './src/routes/historicoDisciplinasRoutes.js';


const PORT = 3000; 
const app = express(); //instância do express

app.use(express.json());
app.use('/', cursoRoutes);
app.use('/', departamentoRoutes);
app.use('/', disciplinaRoutes);
app.use('/', estadoRoutes);
app.use('/', cidadeRoutes);
app.use('/', bairroRoutes);
app.use('/', ruaRoutes);
app.use('/', alunoRoutes);
app.use('/', loginRoutes);
app.use('/', historicoRoutes);
app.use('/', matriculaRoutes);
app.use('/', historicoDisciplinasRoutes);

app.listen(PORT, () => {
    //listen é um evento
    console.log(chalk.black.bgBlue("Servidor está escutando!"));
});