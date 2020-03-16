const mongoose = require("mongoose");

const RecipeModel = mongoose.model("recipes", {
    title: {type: String, unique: true, required: true},
    level: {type: String, enum: ["Easy Peasy", "Amateur Chef", "UltraPro Chef"]},
    ingredients: Array,
    cuisine: {type: String, required: true},
    dishType: {type: String, enum: ["Breakfast", "Dish", "Snack", "Drink", "Dessert", "Other"]},
    image: {type: String, default: "https://images.media-allrecipes.com/images/75131.jpg"},
    duration: {type: Number, min: 0},
    creator: {
        type: mongoose.Types.ObjectId,
        ref: "cooks"
    }
})

module.exports = RecipeModel;