const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var UserSchema = new Schema(
    {
        username: { type: String, required: true },
        password: { type: String, required: true },
        shelf: {type: Schema.Types.ObjectId, ref: 'Shelf', required: true}
    }
)



//Export model
module.exports = mongoose.model('User', UserSchema)