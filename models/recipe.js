const mongoose = require('mongoose');

const Recipe = mongoose.model("recipes", {
    title: String,
    level: String,
    ingredients: [String],
    cuisine: String,
    dishType: String,
    image: String,
    duration: Number,
    creator: [{
        type: ObjectId,
        ref: 'cook'
    }],
})

module.exports = Recipe;