# aircnc

Aplicação Web e Mobile, utilizando ReactJs, React Native, NodeJS e MongoDB.

## FRONTEND
## Passos para o desenvolvimento do FRONTEND da aplicação

-  `yarn create react-app frontend`
- react e reactDOM juntos para fazer a aplicação web.
- Desenvolvimento do App.js
- Instalação do axios para chamada da API
- Criação de /services/api.js para consumo da api pela aplicação
- Ajustando App.js para quando submeter um email é guardado o id do usuário no LocalStorage e o envio do usuário para o banco.
- Criando as pages do front, definindo que rota devem seguir de acordo com o url, defini-se os componentes também para cada rota.
- Desenvolvendo pages/Dashboard, listando Spots
    - useEffect(utilizado para logo que carregar a página mostrar dados da api), useState(retorna um array de duas posições, uma do valor atual e outra de setar um novo valor)
    - Utilizar `key`(proriedade, informação única) quando é utilizado estrutura de repetição.
- Alteração no Backend para receber imagens da api
    - Adicionou no Spot.js do Backend o SpotSchema.virtual 
    - Adicionou uma nova rota `files`, rota para imagens dos spots, utiliza ferramenta do express.
    - Utilizou-se do css de button na page Login na page Dashboard
    




## BACKEND
## Passos para o desenvolvimento do BACKEND da aplicação
- Criação de src/server.js: conectando-se ao mongoDB, importando as rotas e definindo a porta do localhost.
- Criação de src/routes.js: Definição das rotas
- Criação do pattern(mvc): Model, Controller e View (Sem View por enquanto)
- Models: Schema/tabela no banco de dados
- Controllers: Regra de negócio da aplicação.
- Criação do SpotController: recepção da imagens juntamente com os dados do novo Spot à ser criado, utilização do Multer para Multipart.
- Criação do config/upload.js: recepção da imagem com multer, configurando nome do arquivo depois do upload.

![pattern(mvc)](http://www.linhadecodigo.com.br/artigos/img_artigos/AdrianoJoseBaptistella/MVC/image002.jpg)

## Softwares e ferramentas utilizadas
- MongoDB Atlas
- Insomnia

### Depêndencias
- Em produção:
    - Express
    - Mongoose
    - Multer
- Em desenvolvimento:
    - Nodemon
