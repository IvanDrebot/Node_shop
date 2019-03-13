let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UserSchema = new Schema({
    name: String,
    phone: Number,
    email: String,
    password: String
});

module.exports = mongoose.model('User', UserSchema);

