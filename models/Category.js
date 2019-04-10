let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let CategorySchema = new Schema({
    id: {
        type: mongoose.Types.ObjectId,
    },
    name: String
});

module.exports = mongoose.model('Category', CategorySchema);
