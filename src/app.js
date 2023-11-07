
// import dotenv from 'dotenv';
// dotenv.config();
import chalk from "chalk";
import express from "express";

import cursoRoutes from './routes/cursoRoutes.js';
import departamentoRoutes from './routes/departamentoRoutes.js';
import disciplinaRoutes from './routes/disciplinaRoutes.js';
import estadoRoutes from './routes/estadoRoutes.js';
import cidadeRoutes from './routes/cidadeRoutes.js';
import bairroRoutes from './routes/bairroRoutes.js';
import ruaRoutes from './routes/ruaRoutes.js';
import alunoRoutes from './routes/alunoRoutes.js';
import loginRoutes from './routes/loginRoutes.js';
import boletimRoutes from './routes/boletimRoutes.js';


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
app.use('/', boletimRoutes);

app.listen(PORT, () => {
    //listen é um evento
    console.log(chalk.black.bgBlue("Servidor está escutando!"));
});