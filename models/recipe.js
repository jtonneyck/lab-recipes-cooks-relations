const mongoose = require("mongoose");

const Recipe = mongoose.model("recipes", {
    title: {type: String, unique: true, required: true},
    level: {type: String, enum:["Easy Peasy","Amateur Chef", "UltraPro Chef" ]},
    cuisine: {type: String, required: true},
    image: {type: String, default: " https://images.media-allrecipes.com/images/75131.jpg"},
    duration: {type: Number, min: 0},
    creator: {
        type: mongoose.Types.ObjectId,
        ref: "cooks"
    }
});

module.exports = Recipe;