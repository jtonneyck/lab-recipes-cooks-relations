const express = require("express");
const app = express();
const Recipes = require("../models/recipe");
const Cooks = require("../models/cook");

app.get("/", (req, res) =>{
    Recipes
        .find()
        .populate("creator")
        .then((recipes) =>{
            res.render("recipe/recipes.hbs", {recipesHbs: recipes})
        })
        .catch((error) =>{
            console.log(error)
        })
})



module.exports = app;