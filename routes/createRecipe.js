const express = require("express");
const app = express();
const Recipe = require("../models/recipe");
const Cook = require("../models/cook");
const mongoose = require("mongoose");


app.get("/recipes/create", (req,res)=> {
    Cook.find({})
    .then(cooks => res.render("createRecipe", {cooks}))
    .catch(err => console.log(err))
});

app.post("/recipes/create", (req,res)=> {
    Recipe.create({
    title: req.body.title,
    level: req.body.level,
    ingredients: [req.body.ingredients],
    cuisine: req.body.cuisine,
    dishType: req.body.dishType,
    image: req.body.image,
    duration: req.body.duration,
    creator: mongoose.Types.ObjectId(req.body.creator)
    })
    .then(res.redirect("/recipes"))
    .catch(err => console.log(err));
});

module.exports = app;