const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

let peoples = [];

app.get('/', (req, res) => {
    res.status(200).send(peoples);
});

app.post('/', (req, res) => {
    console.log('Corpo:', req.body);
    peoples.push(req.body);
    res.status(201).send(req.body);
});

app.put('/:id', (req, res) => {
    let peoplesFound = peoples.filter(pes => { return pes.id == req.params.id });
    peoplesFound = req.body;

    res.status(202).send('Arquivo Editado com Sucesso');
});

app.delete('/:id', (req, res) => {
    for (let index = 0; index < peoples.length; index++) {
        const people = peoples[index];
        if (people.id == req.params.id) {
            peoples.splice(index, 1);
        }
    }
    res.status(204).send();
});

app.listen(3000, () => {
    console.log('Servidor Frevo Food iniciado na porta 3000');
});