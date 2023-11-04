import app from "./src/app.js";

const PORT = 3000; 

app.listen(PORT, () => {
    //listen é um evento
    console.log(chalk.black.bgBlue("Servidor está escutando!"));
});