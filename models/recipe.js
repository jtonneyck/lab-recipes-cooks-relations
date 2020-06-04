const mongoose = require('mongoose');

const RecipeModel = mongoose.model('recipes', {
  title: String,
  level: String,
  dishType: String,
  image: String,
  cuisine: String,
});

module.exports = RecipeModel;
