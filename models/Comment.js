let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let CommentSchema = new Schema({
    id: mongoose.Types.ObjectId,
    text: String,
    user: {
        type: Schema.ObjectId,
        ref: 'Users'
    }
});

module.exports = mongoose.model('Comment', CommentSchema);