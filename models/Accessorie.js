let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let AccessoriesSchema = new Schema({
    id: mongoose.Types.ObjectId,
    title: String
});

module.exports = mongoose.model('Accessories', AccessoriesSchema);
