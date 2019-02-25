'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const categoryModel = new schema({
    title: { trim: true, index: true, required: true, type: String },
    description: { type: String },
    foto: { type: String, required: true },
    active: { type: Boolean },
    created: { type: Date, default: Date.now },
    modified: { type: Date, default: Date.now }
}, { versionKey: false });

categoryModel.pre('save', next => {
    let now = new Date();
    if (!this.dataCreation)
        this.dataCreation = now;
    next();
});

module.exports = mongoose.model('Category', categoryModel);