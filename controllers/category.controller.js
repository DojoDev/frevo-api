'use strict'
require('../models/category.model');
const mongoose = require('mongoose');
const category = mongoose.model('Category');

const repository = require('../repositories/category.repository');

function categoryController() {

}

categoryController.prototype.post = async (req, res) => {
    let model = new category(req.body);
    let result = await model.save();
    res.status(201).send(result);
 };

categoryController.prototype.put = async (req, res) => { 
    await category.findByIdAndUpdate(req.params.id, {$set: req.body});
    let meetCategory = await category.findById(req.params.id);
    res.status(202).send(meetCategory);
};


categoryController.prototype.get = async (req, res) => { 
    let list = await category.find();
    res.status(200).send(list);
};

categoryController.prototype.getById = async (req, res) => { 
    let meetCategory = await category.findById(req.params.id);
    res.status(200).send(meetCategory);
};


categoryController.prototype.delete = async (req, res) => { 
    let deletado = await category.findByIdAndRemove(req.params.id);
    res.status(204).send(deletado);
};

module.exports = categoryController;