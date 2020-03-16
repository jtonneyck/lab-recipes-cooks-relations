const mongoose = require("mongoose");

const RecipeModel = mongoose.model("recipes", {

  title: String,
  level: String,
  ingredients: Array,
  dishType: String,
  image: String,
  cuisine: String,
  duration: String,
  cook: {
    type: mongoose.Types.ObjectId,
    ref: "cooks"
  }
})

module.exports = RecipeModel;