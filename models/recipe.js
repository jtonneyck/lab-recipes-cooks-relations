const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    title: {
      type: String,
      required:true
    },
    level: {
      type: String,
      enum:["Easy Peasy","Amateur Chef","UltraPro Chef"]
    },
    ingredients: Array,
    cuisine: {
      type: String,
      required: true
    },
    dishType:{
      type: String,
      enum: ["Breakfast","Dish","Snack","Drink","Dessert","Other"]
    },
    image:{
      type: String,
      default: ""
    },
    duration:{
      type: Number,
      min:0
    },
    creator: {
      type: mongoose.Types.ObjectId,
      ref: "cooks"
    }
  });

const Recipe = mongoose.model("recipes",recipeSchema)

module.exports = Recipe;