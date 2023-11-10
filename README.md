# API Elyisum

Então vamos lá, vou tentar ao máximo explicar a arquitetura de API que eu uso. Não que seja a melhor, nem que seja a mais recomendada, mas é o que eu aprendi com o Laravel.

## Começando

Todos os meus projetos de API seguem o padrão _Model-Route-Controller_ (MRC).

**Model**: Contém uma representação do banco de dados. Como costumo trabalhar com a ORM Prisma, as models são feitas dentro do arquivo `prisma/schema.prisma`

**Route**: Contém as rotas de acesso HTTP da aplicação. É aqui onde defino os _endpoints_ onde são feitas as requisições. Normalmente, em 99% dos casos elas redirecionam para um método em um controller. Mantenho elas dentro da pasta `routes/api.js` (roubei esse padrão do Laravel).

**Controller**: Possuem toda a lógica da aplicação. Usam orientação a objetos e assíncronismo. Cada tabela do banco de dados possui um controller, nem sempre isso é aplicável, mas na maioria dos casos sim. Os métodos padrão de controller que uso são os do [Laravel](https://laravel.com/docs/10.x/controllers#actions-handled-by-resource-controller). Os controllers acessam as models e redirecionam respostas para as rotas.

### Explicando o arquivo app.js (ou index.js)

Esse é o entry point da aplicação, normalmente fica fora de qualquer pasta. Ele indica para o servidor o que é usado e como é usado cada módulo instalado, basicamente um arquivo de configurações.

Então, items básicos que ele contém:

* Importação do Express e instância da classe

<small>
    usando o commonjs
</small>

```
const express = require('express')
const app = express()
```

<hr>

<small>
    usando o modules
</small>

```
import express from "express"
const app = express()
```

* Bibliotecas essenciais:

```
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const cors = require('cors')
```

### [Dotenv:](https://www.npmjs.com/package/dotenv)
Permite que você trabalhe com arquivos de variáveis de ambiente

### [BodyParser:](https://www.npmjs.com/package/body-parser)
Permite que você converta dados recebidos através de requisições HTTP do tipo POST e transforme-os em JSON, para trabalhar com estes dados

### [CORS:](https://www.npmjs.com/package/cors)
É uma política de segurança de navegadores. Basicamente uso ele para permitir o acesso de outros dispositivos à minha API.

<hr>

## Configurações desses pacotes

Tudo no entry point, ok?

```
dotenv.config();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
```

Por fim, o entry point também deve abrir o servidor

```
app.listen(PORT, () => {
    console.log(chalk.black.bgBlue("Servidor está escutando!"));
});
```

<hr>

# Rotas

Lá em cima dei uma explicada, mas basicamente na pasta `routes/` você terá seu arquivo (ou arquivos) das rotas.

Eu trabalho com um só, porque roubei essa ideia do Laravel, mas você pode fazer do jeito que está fazendo.

Lá no entry point você deve dizer que seu app usa as rotas. Do jeito que está aqui tá certo.

# Controllers

Do jeito que você fez está certo. Eu uso classes, aí nas rotas eu importo as classes e direciono para os métodos. Não precisa mudar, é coisa de filosofia e vai funcionar de ambas as formas.

# Arquivos estáticos

Acho que essa é a parte que você está com dificuldades.

Os arquivos estáticos são imagens, css, js etc.

Lá no seu entry point, você vai colocar a linha

```
app.use(express.static('public'))
```

Isso vai dizer ao seu servidor que todos os arquivos estáticos estão dentro de uma pasta public. Você ainda não tem ela.

Ah, pode ser qualquer nome lá, ok? É que por convenção use-se _public_.

Dentro dessa pasta, eu criei outras pastas, para js, css e images. Você pode apagar depois as que não vão ser usadas.

Agora digamos que um usuário criou a conta e por padrão você tem uma imagem `profile.png` que é atribuída ao usuário.

Você precisa retornar a url dessa imagem ao front-end, para ser inserido no atributo `src` da imagem de perfil do usuário.

Então, você devolverá essa url: `https://www.blabla.squareweb.app/images/profile.png`

### O que isso significa?

Significa que você configurou seu servidor para que ele use a pasta `public` como padrão para armazenar arquivos estáticos. então, tudo que estiver dentro da pasta public pode ser acessado. 
