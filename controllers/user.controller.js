'use strict'

require('../models/user.model');

const repository = require('../repositories/user.repository');
const validation = require('../bin/helpers/validations');
const ctrBase = require('../bin/base/controller.base');
const _repo = new repository();
const md5 = require('md5');
const jwt = require('jsonwebtoken');
const variable = require('../bin/config/variables');

function userController() {

}

userController.prototype.post = async (req, res) => {
    let _validationContract = new validation();

    _validationContract.isRequired(req.body.name, 'Informe seu Nome');
    _validationContract.isRequired(req.body.email, 'Informe seu e-mail');
    _validationContract.isEmail(req.body.email, 'O e-mail informado é obrigatório');
    _validationContract.isRequired(req.body.password, 'A Senha é inválida!');
    _validationContract.isRequired(req.body.passAuth, 'A Confirmação da Senha é inválida!');
    _validationContract.isTrue(req.body.password != req.body.passAuth, 'A senha e a confirmação não é válida!');

    let userEmailExist = await _repo.isEmailExist(req.body.email);
    if (userEmailExist) {
        _validationContract.isTrue((userEmailExist.name != undefined), `Já existe o e-mail ${req.body.email} cadastrado`);
    }
    //Criptografa a senha
    req.body.password = md5(req.body.password);

    ctrBase.post(_repo, _validationContract, req, res);
};

userController.prototype.put = async (req, res) => {
    let _validationContract = new validation();

    _validationContract.isRequired(req.body.name, 'Informe seu nome');
    _validationContract.isRequired(req.body.email, 'Informe seu e-mail');
    _validationContract.isEmail(req.body.email, 'O e-mail informado é obrigatório');
    _validationContract.isRequired(req.params.id, 'Informe o Id do usuário');

    let userEmailExist = await _repo.isEmailExist(req.body.email);
    if (userEmailExist) {
        _validationContract.isTrue(
            (userEmailExist.name != undefined) &&
            (userEmailExist._id != req.params.id),
            `Já existe o e-mail ${req.body.email} cadastrado`);
    }

    ctrBase.put(_repo, _validationContract, req, res);
};


userController.prototype.get = async (req, res) => {
    ctrBase.get(_repo, req, res);
};

userController.prototype.getById = async (req, res) => {
    ctrBase.getById(_repo, req, res);
};


userController.prototype.delete = async (req, res) => {
    ctrBase.delete(_repo, req, res);
};

userController.prototype.authentication = async (req, res) => {
    let _validationContract = new validation();

    _validationContract.isRequired(req.body.email, 'Informe seu E-mail');
    _validationContract.isEmail(req.body.email, 'O E-mail digitado é inválido');
    _validationContract.isRequired(req.body.password, 'Iforme sua senha');

    if (!_validationContract.isValid()) {
        res.status(400).send({ message: 'Não foi possível efeturar o login', validation: _validationContract.errors() })
        return;
    }

    let foundUser = await _repo.authenticate(req.body.email, req.body.password);
    let hash = variable.Security.secretKey;

    if (foundUser) {
        res.status(200).send({
            user: foundUser,
            token: jwt.sign({users: foundUser}, hash)
        })
    } else {
        res.status(404).send({
            message: 'Usuário e senha não encontrado!'
        });
    }
}

module.exports = userController;