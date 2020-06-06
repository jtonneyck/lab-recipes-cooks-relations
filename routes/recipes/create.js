const express = require("express");
const app = express();
const Recipe = require("../../models/recipe");
const Cook = require("../../models/cook");

app.get("/recipes/create", (req, res) => {
    Cook
        .find()
        .then((cooks) => {
            res.render("recipes/create", {cooks})
        })
})

app.post("/recipes/create", (req, res) => {
    let newRecipe = req.body;
    Recipe
        .create(newRecipe)
        .then((recipe) => {
            res.redirect(`/recipes/details?id=${recipe._id}`);
        })
        .catch((err) => {
            console.log("err", err);
        })
})

module.exports = app;