const express = require("express");
const app = express();
const Recipe = require("../../models/recipe");
const Cook = require("../../models/cook");

app.get("/recipes/update", (req, res) => {
    Recipe
        .findById(req.query.id)
        .then((recipe) => {
            res.render("recipes/update", {recipe});
        })
        .catch((err) => {
            console.log("err", err)
        })
    Cook
        .find()
        .then((cooks) => {
            res.render("recipes/create", {cooks})
        })
})

app.post("/recipes/update", (req, res) => {
    let recipeId = req.body.id
    Recipe
        .findByIdAndUpdate(recipeId, {
            title: req.body.title,
            level: req.body.level,
            duration: req.body.duration
        })
        .then((recipe) =>{
            res.redirect(`/recipes/details?id=${recipe._id}`)
        })
        .catch((err) => {
            console.log("err", err);
        })
})

module.exports = app;