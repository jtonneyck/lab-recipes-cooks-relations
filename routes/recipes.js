const express = require('express');
const app = express();
const Recipe = require('../models/recipe.js');
// const Cook = require('../models/cook');


app.get('/', (req, res) => {
  res.render('index.hbs');
});

app.get('/recipes', (req, res, next) => {
  Recipe.find()
    .then(allRecipesFromDB => {
      res.render('recipes.Hbs', { recipesHbs: allRecipesFromDB });
    })
    .catch(err => {
      next('database error');
    });
});

// git stash *

module.exports = app;
