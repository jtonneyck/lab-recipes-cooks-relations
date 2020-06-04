const express = require('express')
const app = express()
const Recipe = require("../../models/recipe.js");
const Cook = require("../../models/cook.js");

app.get("/recipes/create", (req, res, next) => {
    Cook.find({})
        .then(cooks => {
            res.render('recipes/create', {cooks: cooks});
        })
})

app.post("/recipes/create", (req, res, next) => {
    const newRecipe = req.body;

    Recipe.create(newRecipe)
        .then(recipes => {
            res.redirect(`/recipes/details/?id=${recipes._id}`);
        })
        .catch(error => {
            console.log("Recipe did not got added because of an error", error)
        })
})

module.exports = app;