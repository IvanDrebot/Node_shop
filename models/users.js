let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UsersSchema = new Schema({
    name: String,
    surname: String,
    password: String,
    login: String,
    age: Number
});

UsersModel = mongoose.model('Users', UsersSchema);
module.exports = UsersModel;
