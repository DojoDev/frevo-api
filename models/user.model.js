'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userModel = new schema({
    name: { type: String, required: true, trim: true, index: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    avatar: { type: String },
    active: { type: Boolean, required: true },
    created: { type: Date, default: Date.now }
}, { versionKey: false });

userModel.pre('save', next => {
    let now = new Date();
    if (!this.created)
        this.created = now;
    next();
});

module.exports = mongoose.model('User', userModel);