const mongoose = require('mongoose');

const Recipe = mongoose.model("recipes", {
    title: String,
    level: String,
    ingredients: [String],
    cuisine: String,
    dishType: String,
    image: String,
    duration: Number,
    creator: {
        type : mongoose.Types.ObjectId,
        ref: 'cooks'
    },
})

module.exports = Recipe;