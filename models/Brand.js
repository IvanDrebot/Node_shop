let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let BrandSchema = new Schema({
    // id: mongoose.Types.ObjectId,
    name: String
});

module.exports = mongoose.model('Brand', BrandSchema);
