const express = require("express");
const app = express();
const Recipe = require("../models/recipe");
const Cook = require("../models/cook")

app.get("/", (req,res)=> {
    Recipe
        .find()
        .populate("creator")
        .then((recipes)=> {
            res.render("Recipes", {recipesHbs: recipes});
        })
        .catch((err)=> {
            res.render("error", err);
        })
})



module.exports = app;