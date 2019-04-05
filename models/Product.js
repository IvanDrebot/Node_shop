let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ProductSchema = new Schema({
    id: mongoose.Types.ObjectId,
    category: {
        type: Schema.ObjectId,
        ref: 'Category'
    },
    brand: {
        type: Schema.Types.ObjectId,
        ref: 'Brand'
    },
    imgUrl: String,
    price: Number
});

module.exports = mongoose.model('Product', ProductSchema);

