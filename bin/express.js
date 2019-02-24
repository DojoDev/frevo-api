const express = require('express');
const bodyParser = require('body-parser');

//Routers
const categorieRouter = require('../routes/categorie.router');
const productRouter = require('../routes/product.router');

//Criando/Invocando a Api/Server Web do Express
const app = express();

//Configurando o parse do Json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Configurando as rotas
app.use('/api/categorie', categorieRouter);
app.use('/api/product', productRouter);

//Exportando nossa Api
module.exports = app;