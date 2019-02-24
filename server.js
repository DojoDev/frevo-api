'use strict'

const app = require('../frevo-api/bin/express');
const varibables = require('../frevo-api/bin/config/variables');

app.listen(varibables.Api.port, () => {
    console.info(`API Frevo Food Rodando na Porta ${varibables.Api.port}`);
});