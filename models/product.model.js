'use strict'
const mongoose =  require('mongoose');
const schema =  mongoose.Schema;

const productModel = new schema({
  name: {type: String,required: true, trim: true, index: true},
  description:{type:String, require: true},
  price:{type:Number, required: true, default: 0},
  image:{type:String, requires: true},
  active:{type: Boolean, required: true, default: true},
  created: { type: Date, default: Date.now }
}, {versionKey:false});

productModel.pre('save', next => {
    let now = new Date();
    if (!this.created)
        this.created = now;
    next();
});

module.exports = mongoose.model('Product', productModel);