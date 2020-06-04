const express = require("express");
const app = express();
const Recipe = require("../../models/Recipe");
const Cook = require("../../models/Cook");


app.get('/', (req, res) => {
    Recipe
    .find({})
    .populate("creator")
    .then(recipes => {
      res.render('recipes/listRecipe',{recipes: recipes});
    });
  })
  

module.exports = app;
