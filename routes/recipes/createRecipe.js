const express = require('express');
const app = express();
const Recipe = require("../../models/Recipe");
const Cook = require("../../models/Cook");

app.post("/recipe/create", (req, res) => {
    let newRecipe = req.body;
    Recipe.create(newRecipe)
      .then((newRecipe) => {
        res.redirect(`/recipe/details?id=${newRecipe._id}`);
      })
      .catch((err) => {
        console.log("Err",err)
      })
})

app.get("/recipe/create", (req,res) => {
  Cook.find()
  .then((cooks)=> {
    res.render("recipes/createRecipe",{cooks});
  })
})

module.exports = app;

