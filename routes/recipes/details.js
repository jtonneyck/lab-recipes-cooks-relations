const express = require('express');
const app = express();
const Recipe = require("../../models/recipe.js");
const Cook = require("../../models/cook.js");

app.get("/recipes/details/", (req, res, next) => {
    const idToLoad = req.query.id

    Recipe.findById(idToLoad)
        .populate('creator')
        .then((recipes) => {
            console.log(recipes)
            res.render('recipes/details', { recipes: recipes })
        })
        .catch((error) => {
            console.log("Error with loading recipe details", error)
        })
})

module.exports = app; 