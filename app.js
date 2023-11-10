
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

import bodyParser from "body-parser";
import cors from "cors";


const PORT = 3000; 
const app = express(); //instância do express

// app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

// define um diretório que contém arquivos estáticos que serão servidos pelo servidor.
// poderia ser qualquer outro nome, como publico, static, etc.
// por convenção, usa-se public
app.use(express.static('public'));

app.listen(PORT, () => {
    //listen é um evento
    console.log(chalk.black.bgBlue("Servidor está escutando!"));
});