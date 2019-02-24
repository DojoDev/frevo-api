'use strict'

function productController() {

}

productController.prototype.get = async (req, res) => { 
    res.status(200).send('Funcionando...');
};

productController.prototype.getById = async (req, res) => { 
    res.status(200).send(`O id passado foi ${req.params.id}`);
};

productController.prototype.post = async (req, res) => { };

productController.prototype.put = async (req, res) => { };


productController.prototype.delete = async (req, res) => { };

module.exports = productController;