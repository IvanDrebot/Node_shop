let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ProductSchema = new Schema({
    id: mongoose.Types.ObjectId,
    category: {
        type: Schema.ObjectId,
        ref: 'Category'},
    producer: {
        type: Schema.Types.ObjectId,
        ref: 'Producer'},
    comments: {
        type: Schema.Types.ObjectId,
        ref: 'Comment'},
    accessories: {
        type: Schema.Types.ObjectId,
        ref: 'Accessories'},
    image: String,
    price: Number,
    brand: String,
    // diagonalScreen: Number,
    // resolutionScreen: String,
    // displayType: String,
    // internalMemory: Number,
    // RAM: Number,
    // camera: Number,
    // frontCamera: Number,
    // battery: Number,
    // countOfSimCard: Number,
    // countOfCores: Number,
    // operatingSystem: String,
    // color: String,
    // graduationYear: Number
});

module.exports = mongoose.model('Product', ProductSchema);
