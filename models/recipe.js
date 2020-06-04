const mongoose = require("mongoose");

module.exports = mongoose.model("Recipe", {
    title: String,
    level: String,
    ingredients: Array,
    cuisine: String,
    dishType: String,
    image: String,
    duration: Number,
    creator: {type: mongoose.Schema.ObjectId, ref: "cooks"}
}, "recipes")

// const Recipe = mongoose.model("recipes", {
//     title: String,
//     level: String,
//     ingredients: Array,
//     cuisine: String,
//     dishType: String,
//     image: String,
//     duration: Number,
//     creator: {type: mongoose.Schema.ObjectId, ref: "Cook"}
// })