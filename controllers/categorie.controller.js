'use strict'

function categorieController() {

}

categorieController.prototype.get = async (req, res) => { 
    res.status(200).send('Funcionando...');
};

categorieController.prototype.getById = async (req, res) => { 
    res.status(200).send(`O id passado foi ${req.params.id}`);
};

categorieController.prototype.post = async (req, res) => { };

categorieController.prototype.put = async (req, res) => { };


categorieController.prototype.delete = async (req, res) => { };

module.exports = categorieController;