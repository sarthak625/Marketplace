const mongoose = require('mongoose'),
        Schema = mongoose.Schema;

const productSchema = new Schema({
    name: String,
    category: String,
    price: String
});

mongoose.model('Product',productSchema);
