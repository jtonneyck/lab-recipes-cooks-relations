const express = require('express');
const  app = express();
const Recipe = require('../../models/Recipe.model');
const Cook = require('../../models/Cook');

app.post('/create/add', (req, res)=> {
    debugger
    console.log(req.body)
    const newRecipe = req.body;
    Recipe.create(newRecipe)
    .then((recipe) => {
        res.redirect('/');
    })
    .catch((error) => {
        console.log(error);
    })
});

app.get('/recipe', (req, res) => {
    Cook
      .find({})
      .then(allCooks => {  
        res.render('./recipes/create', {allCooks})
      })
      .catch(error => {
        console.error('Cannot render cooks', error);
      })
});



module.exports = app