
// import dotenv from 'dotenv';
// dotenv.config();
import chalk from "chalk";
import express from "express";
const cursoRoutes = require('./routes/cursoRoutes.js');
const departamentoRoutes = require('./routes/departamentoRoutes.js');
const disciplinaRoutes = require('./routes/disciplinaRoutes.js');

const PORT = 3000; 
const app = express(); //instância do express

app.use(express.json());
app.use('/', cursoRoutes);
app.use('/', departamentoRoutes);
app.use('/', disciplinaRoutes);

app.listen(PORT, () => {
    //listen é um evento
    console.log(chalk.black.bgBlue("Servidor está escutando!"));
});