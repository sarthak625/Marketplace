const mongoose = require('mongoose');
require('../models/product');

var Product = mongoose.model('Product');

function insert(obj,callback){
    var product = new Product({name:obj.name,"category":obj.category,"price":obj.price});
    product.save().then(callback);
}

function fetchAllProducts(callback){
    return Product.find(callback);
}

module.exports = {
    insert,
    fetchAllProducts
}