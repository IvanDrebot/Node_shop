let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let PhonesSchema = new Schema({
    imgUrl: String,
    name: String,
    price: Number,
    specifications: String
});

module.exports = mongoose.model('Phones', PhonesSchema);
