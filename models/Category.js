let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let CategorySchema = new Schema({
    name: String,
    image: String,
    description: []
});

module.exports = mongoose.model('Category', CategorySchema);
