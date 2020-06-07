const express = require('express');
const app  = express.Router();
const Recipe = require('../models/recipe.js');

app.get("/recipes/:id", (req,res)=> {
    Recipe.findById(req.params.id)
        .then((recipe)=> {
        //  console.log(recipe);
            res.render("recipeinfo.hbs", {recipe});
        })
        .catch((err)=> {
            res.render("error", err);
        })
  })
  



  module.exports = app;