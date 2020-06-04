const express = require('express');
const app = express();
const Recipe = require("../../models/recipe.js");
const Cook = require("../../models/cook.js");

app.get("/recipes", (req, res, next) => {
    Recipe.find({})
        .populate('creator')
        .then((recipes) => {
            res.render('recipes/recipes', { recipes: recipes })
        })
        .catch((error) => {
            console.log("Error with loading recipes", error)
        })
})

module.exports = app;