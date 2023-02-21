const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var MarkedGameSchema = new Schema(
    {
        gameListing: { type: Schema.Types.ObjectId, ref: 'GameListing', required: true },
        user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        rating: { type: Number, min: 0, max: 10 },
        mood: { type: Schema.Types.ObjectId, ref: 'Mood' },
        review: { type: Schema.Types.ObjectId, ref: 'Review', required: true }
    }
)



//Export model
module.exports = mongoose.model('MarkedGame', MarkedGameSchema)