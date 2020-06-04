const express = require("express");
const app = express();
const Recipe = require("../../models/Recipe");
const Cook = require("../../models/Cook");
const Review = require("../../models/Review");


app.get('/', (req, res) => {
    Recipe
    .find({})
    .populate("creator")
    .populate("reviews")
    .then(recipes => {
      res.render('recipes/listRecipe',{recipes: recipes});
    });
  })
  

module.exports = app;
