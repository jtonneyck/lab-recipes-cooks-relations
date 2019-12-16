const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId;

const Recipe = mongoose.model("recipes", {
    title: String,
    level: String, 
    ingredients: [String],
    cuisine: String,
    dishType: String,
    image: String,
    duration: Number,
    creator: {type: ObjectId, ref: "cooks",}
});

module.exports = Recipe;