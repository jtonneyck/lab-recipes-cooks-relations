const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const recipeSchema = new Schema({
  title:{type : String, required:true,unique: true},
  level:{type : String}, 
  ingredients : {Array : [String ]},
  cuisine:{type: String},
  dishType:{type: String},
  image : {type: String, default: "https://images.media-allrecipes.com/images/75131.jpg"},
  duration: {type: Number, minValue:0},
  creator:{ type : Schema.Types.ObjectId, ref: 'Cook' },
  created :{type: Date, default: Date.now}
});

const Recipe = mongoose.model("Recipe", recipeSchema, 'recipes');
module.exports = Recipe;

