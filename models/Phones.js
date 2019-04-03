let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let PhonesSchema = new Schema({
    id: mongoose.Types.ObjectId,
    imgUrl: String,
    name: String,
    price: {
        type: Number,
        min: 2000,
        max: 15000
    },
    specifications: String
});

PhonesSchema.query.byName = function(name){
    return this.find({name: name})
};

module.exports = mongoose.model('Phones', PhonesSchema);
