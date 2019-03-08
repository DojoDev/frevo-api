const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const variables = require('../bin/config/variables');

//Routers
const categoryRouter = require('../routes/category.router');
const productRouter = require('../routes/product.router');

//Criando/Invocando a Api/Server Web do Express
const app = express();

//Configurando o parse do Json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Conectando o Banco de Dados
mongoose.connect(variables.Database.connection);

//Configurando as rotas
app.use('/api/category', categoryRouter);
app.use('/api/product', productRouter);

//Exportando nossa Api
module.exports = app;