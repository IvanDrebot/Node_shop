let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        min: 6
    },
    phone: {
        type:Number,
        required: true,
        min: 6
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', UserSchema);

