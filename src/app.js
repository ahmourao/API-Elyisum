
// import dotenv from 'dotenv';
// dotenv.config();
import chalk from "chalk";
import express from "express";
import { PrismaClient } from '@prisma/client'
const PORT = 3000; 

const app = express(); //instância do express
const prisma = new PrismaClient()

app.use(express.json())
app.listen(PORT, () => {
    //listen é um evento
    console.log(chalk.black.bgBlue("Servidor está escutando!"));
});