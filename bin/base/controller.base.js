'use strict'
exports.post = async (repository, validationContract, req, res) => {
    try {
        let data = req.body;
        if (!validationContract.isValid()) {
            res.status(400).send({
                message: 'Existem dados inválidos na sua requisição',
                validation: validationContract.errors()
            }).end();
            return;
        }
        let result = await repository.create(data);
        res.status(201).send(result);
    } catch (err) {
        console.log('Postcom error, motivo:', err);
        res.status(500).send({ message: 'Erro no processo', error: err });
    }
};

exports.put = async (repository, validationContract, req, res) => {
    try {
        let data = req.body;
        if (!validationContract.isValid()) {
            res.status(400).send({
                message: 'Existem dados inválidosna sua requisição',
                validation: validationContract.errors()
            }).end();
            return;
        }
        let result = await repository.update(req.params.id, data);
        res.status(201).send(result);
    } catch (err) {
        console.log('Put com error, motivo:', err);
        res.status(500).send({ message: 'Erro no processo', error: err });
    }
};

exports.get = async (repository, req, res) => {
    try {
        let list = await repository.getAll();
        res.status(200).send(list);
    } catch (err) {
        console.log('Get com error, motivo:', err);
        res.status(500).send({ message: 'Erro no processo', error: err });
    }
};

exports.getById = async (repository, req, res) => {
    try {
        let id = req.params.id;
        if (id) {
            let data = await repository.getById(id);
            res.status(200).send(data);
        } else {
            res.status(400).send({ message: 'O parametro id precisa ser informado' });
        }

    } catch (error) {
        console.log('getById com error, motivo:', err);
        res.status(500).send({ message: 'Erro no processo', error: err });
    }
};
exports.delete = async (repository, req, res) => {
    try {
        let id = req.params.id;
        if (id) {
            let data = await repository.delete(id);
            res.status(200).send({ message: 'registro excluido com sucesso.' });
        } else {
            res.status(400).send({ message: 'O parametro id precisa ser informado' });
        }
    } catch (error) {
        console.log('Delete com error, motivo:', err);
        res.status(500).send({ message: 'Erro no processo', error: err });
    }
};