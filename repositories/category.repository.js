
'use strict';
require('../models/category.model');
const mongoose =require('mongoose');
const CategoryModel = mongoose.model('Category');

class categoryRepository{

    constructor(){

    }

    async create(data){
        let category = new CategoryModel(data);
        let result = await category.save();
        return result;
    }

    async update(id,data){
        await CategoryModel.findByIdAndUpdate(id, {$set: date});
        let result = await CategoryModel.findById(id);
        return result;
    }


}

module.exports = categoryRepository;