'use strict'

const repository = require('../repositories/product.repository');
const validation = require('../bin/helpers/validations');
const ctrBase = require('../bin/base/controller.base');
const _repo = new repository();

function productController() {

}

productController.prototype.post = async (req, res) => {
    let _validationContract = new validation();

    _validationContract.isRequired(req.body.name, 'Nome obrigatório');
    _validationContract.isRequired(req.body.description, 'A descrição é obrigatório');
    _validationContract.isRequired(req.body.price, 'Valor obrigatório');
    _validationContract.isRequired(req.body.image, 'A Imagem é obrigatório');
 
    if(req.body.price){
        _validationContract.isTrue(req.body.price == 0, 'O preço do produto deve ser maior que zero');
    }
    
    ctrBase.post(_repo, _validationContract, req, res);
 };

 productController.prototype.put = async (req, res) => { 
    let _validationContract = new validation();

   
    _validationContract.isRequired(req.body.name, 'Nome obrigatório');
    _validationContract.isRequired(req.body.description, 'A descrição é obrigatório');
    _validationContract.isRequired(req.body.price, 'Valor obrigatório');
    _validationContract.isRequired(req.body.image, 'A Imagem é obrigatório');
 
    if(req.body.price){
        _validationContract.isTrue(req.body.price == 0, 'O preço do produto deve ser maior que zero');
    }
    
    ctrBase.put(_repo, _validationContract, req, res);
};


productController.prototype.get = async (req, res) => { 
    ctrBase.get(_repo, req, res);
};

productController.prototype.getById = async (req, res) => { 
    ctrBase.getById(_repo, req, res);
};


productController.prototype.delete = async (req, res) => { 
    ctrBase.delete(_repo, req, res);
};

module.exports = productController;