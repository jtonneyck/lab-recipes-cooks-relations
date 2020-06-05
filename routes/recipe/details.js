const express = require('express');
const  app = express();
const Recipe = require('../../models/Recipe.model');


app.get("/details/:recipeId", (req,res)=>{
    debugger	
    Recipe
      .findById(req.params.recipeId)
      .populate('creator')
      .populate('reviews')
      .then(recipe =>{
        res.render('./recipes/recipeDetails', {recipe})
      })
      .catch(error => {
        console.error('Cannot render the recipe details', error);
      })
  })

  module.exports = app