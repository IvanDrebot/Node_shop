let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let RegisterSchema = new Schema({
    name: String,
    phone: Number,
    email: String,
    password: String
});

RegisterModel = mongoose.model('Register', RegisterSchema);
module.exports = RegisterModel;
