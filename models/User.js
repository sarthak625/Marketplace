const mongoose = require('mongoose'),
        Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
    phone: Number,
    password: String
});

mongoose.model('User',userSchema);
