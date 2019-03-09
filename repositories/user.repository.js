
'use strict'
require('../models/user.model');
const base = require('../bin/base/repository.base');
const md5 = require('md5');

class userRepository {

    constructor() {
        this._base = new base('User');
        this._projection = 'name email _id';
    }

    async isEmailExist(Email) {
        return await this._base._model.findOne({ email: Email }, this._projection);
    }

    async authenticate(Email, Password) {
        let _hashPass = md5(Password);
        return await this._base._model.findOne({ email: Email, password: _hashPass }, this._projection);
    }

    async create(data) {
        let userCreate = await this._base.create(data);
        return this._base._model.findById(userCreate._id), this._projection
    }

    async update(id, data) {
        let userUpdate = await this._base.update(id, {
            name: data.name,
            email: data.email,
            avatar: data.avatar
        });
        return this._base._model.findById(userUpdate._id, this._projection);
    }

    async getAll() {
        return await this._base._model.find({}, this._projection);
    }

    async getById(id) {
        return await this._base._model.findById(id, 'name email _id avatar');
    }

    async delete(id) {
        return await this._base.delete(id);
    }

}

module.exports = userRepository;