let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let PaymentSchema = new Schema({
    id: mongoose.Types.ObjectId,
    name: String
});

module.exports = mongoose.model('Payment', PaymentSchema);