'use strict'

const repository = require('../repositories/category.repository');
const validation = require('../bin/helpers/validations');
const ctrBase = require('../bin/base/controller.base');
const _repo = new repository();

function categoryController() {

}

categoryController.prototype.post = async (req, res) => {
    let _validationContract = new validation();
     
    _validationContract.isRequired(req.body.title, 'Titulo é obrigatório');
    _validationContract.isRequired(req.body.image, 'A Imagem é obrigatório');
    
    ctrBase.post(_repo, _validationContract, req, res);
 };

categoryController.prototype.put = async (req, res) => { 
    let _validationContract = new validation();
     
    _validationContract.isRequired(req.body.title, 'Titulo é obrigatório');
    _validationContract.isRequired(req.body.image, 'A Imagem é obrigatório');
    _validationContract.isRequired(req.params.id, 'O id que será atualizado é obrigatório!');
    
    ctrBase.put(_repo, _validationContract, req, res);
};


categoryController.prototype.get = async (req, res) => { 
   ctrBase.get(_repo, req, res);
};

categoryController.prototype.getById = async (req, res) => { 
    ctrlBase.getById(_repo, req, res);
};


categoryController.prototype.delete = async (req, res) => { 
   ctrlBase.delete(_repo, req, res);
};

module.exports = categoryController;