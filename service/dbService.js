const mongoose = require('mongoose');
require('../models/User');

var User = mongoose.model('User');

function insert(obj,callback){
    var user = new User({name:obj.name,"email":obj.email,"phone":obj.phone,"password":obj.password});
    user.save().then(callback);
}

function find(obj,callback){
    return User.find(obj,callback);
}

module.exports = {
    insert,
    find
}