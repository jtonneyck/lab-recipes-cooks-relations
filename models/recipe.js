const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Cook = require("./cook");

const recipeSchema = new Schema({title: String,
    level: String,
    ingredients: Array,
    cuisine: String,
    dishType: String,
    image: {
      type: String,
      default: "https://images.media-allrecipes.com/images/75131.jpg"
    },
    duration: {
      type: Number,
      min: 0
    },
    created: {
      type: Date,
      default: Date.now
    },
    creator: {
      type: mongoose.Types.ObjectId,
      ref: "cooks",
    }
});

const Recipe = mongoose.model("recipes", recipeSchema);

module.exports = Recipe;