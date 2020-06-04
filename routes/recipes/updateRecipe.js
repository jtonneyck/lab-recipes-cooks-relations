const express = require('express');
const app = express();
const Recipe = require("../../models/Recipe");
const Cook = require("../../models/Cook");

app.get('/recipe/updateRecipe', (req, res) => {
    Cook.find()
    .then((cooks)=> {
        Recipe.findById(req.query.id)
        .populate("creator")
        .then((recipe)=> {
            cooks = cooks.map((cook)=> {
                return({
                    id: cook.id,
                    name: cook.name,
                    isCurrent: cook.id === recipe.creator.id
                })
            })
            var levels = ['Easy Peasy', 'Amateur Chef', 'UltraPro Chef']
            levels = levels.map((level) => {
                return({
                    level: level,
                    isCurrent: level === recipe.level
                })
            })
            var dishes = ['breakfast', 'main_course', 'soup','snack','drink','dessert','other']
            dishes = dishes.map((dish) => {
                return({
                    dish: dish,
                    isCurrent: dish === recipe.dishType
                })
            })
            
            res.render("recipes/updateRecipe", {
                recipe: recipe, 
                cooks: cooks,
                levels : levels,
                dishes : dishes,

            })
        })
    })
    .catch((error) => {
    console.log(error);
    })
});

app.post("/recipe/updateRecipe", (req, res) => {
    let recipeId = req.body._id;
    Recipe.findByIdAndUpdate(recipeId, {
        title: req.body.title,
        level: req.body.level,
        ingredients: req.body.ingredients,
        cuisine: req.body.cuisine,
        dishType: req.body.dishType,
        image: req.body.image,
        duration: req.body.duration,
        creator: req.body.creator,
    })
      .then((updateRecipe) => {
        res.redirect(`/recipe/details?id=${updateRecipe._id}`);
      })
      .catch((err) => {
        console.log("Err",err)
      })
})

module.exports = app;