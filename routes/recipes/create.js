const express = require("express");
const app = express();
const Recipe = require("../../models/recipe");
const Cook = require("../../models/cook")

app.get("/recipes/create", (req, res) => {
    res.render("recipes/create");
})

app.post("/recipes/create", (req, res) => {
    let newRecipe = {
        title: req.body.title,
        dishType: req.body.dishType,
        creator: req.body.creator,
    };
    
    Recipe
        .create(newRecipe)
        .then((recipe) => {
            res.render("recipes/recipe-details", {recipe})
        // res.redirect(`/recipes/details?id=${recipe._id}`)
        })
        .catch((err) => {
            console.log("err", err);
        })
})

module.exports = app;