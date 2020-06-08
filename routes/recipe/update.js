const express = require('express');
const  app = express();
const Recipe = require('../../models/Recipe.model');
const Cook = require('../../models/Cook');

app.get("/:recipeId", (req,res)=>{
    Cook
      .find()
      .then((cooks)=>{
        Recipe
          .findById(req.params.recipeId)
          .populate('creator')
          .then(recipe =>{
            cooks = cooks.map((cook)=>{
              return({
                id : cook.id,
                name : cook.name,
                isCurrent : cook.id === recipe.creator.id
              })
            })
          })
    Recipe
      .findById(req.params.recipeId)
        .then(recipe =>{
          res.render('./recipes/update', {
            recipe : recipe,
            cooks : cooks
          })
        })
      .catch(error => {
        console.error('Cannot render the recipe details', error);
      })
      })
  })

  app.post('/add', (req, res)=> {
    debugger
    console.log(req.body)
    const recipeId = req.body._id;
    Recipe.findByIdAndUpdate( recipeId ,{
        title: req.body.title,
        ingredients: req.body.ingredients,
        level: req.body.level,
        cuisine: req.body.cuisine,
        dishType: req.body.dishType,
        image: req.body.image,
        duration: req.body.duration,
        creator: req.body.creator,
    }, false)
    .then((recipe) => {
        res.redirect(`/recipes/details/${recipeId}`);
    })
    .catch((error) => {
        console.log(error);
    })
});
  module.exports = app