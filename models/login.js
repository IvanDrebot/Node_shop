let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let LoginSchema = new Schema({
    email: String,
    password: String
});

LoginModel = mongoose.model('Login', LoginSchema);
module.exports = LoginModel;
