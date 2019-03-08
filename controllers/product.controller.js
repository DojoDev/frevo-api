'use strict'
require('../models/product.model');
const repository = require('../repositories/product.repository');

function productController() {

}

productController.prototype.post = async (req, res) => {
    let result = await new repository().create(req.body);
    res.status(201).send(result);
 };

 productController.prototype.put = async (req, res) => { 
    let result = await new repository().update(req.params.id, req.body);
    res.status(202).send(result);
};


productController.prototype.get = async (req, res) => { 
    let list = await new repository().getAll();
    res.status(200).send(list);
};

productController.prototype.getById = async (req, res) => { 
    let meetCategory = await new repository().getById(req.params.id)
    res.status(200).send(meetCategory);
};


productController.prototype.delete = async (req, res) => { 
    let deletado = await new repository().delete(req.params.id);
    res.status(204).send(deletado);
};

module.exports = productController;