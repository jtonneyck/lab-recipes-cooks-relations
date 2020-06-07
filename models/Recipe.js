const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: { type: String, required: true },
  level: { type: String, enum: ['Easy Peasy', 'Amateur Chef', 'UltraPro Chef'] },
  ingredients: [String],
  cuisine: { type: String, required: true },
  dishType: { type: String, enum: ['breakfast', 'main_course', 'soup','snack','drink','dessert','other'] },
  image: { type: String, default: 'https://images.media-allrecipes.com/images/75131.jpg' },
  duration: { type: Number, min: 0},
  creator: {type: mongoose.Schema.ObjectId, ref: "Cook"},
  reviews: [{type: mongoose.Schema.ObjectId, ref: "Review"}],
});
recipeSchema.index({'$**': 'text'});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;