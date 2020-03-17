const express = require("express");
const app = express();
const Cook = require("../models/cook",);
const Recipe = require("../models/recipe");

app.get("/", (req, res)=> {
    Recipe
        .find()
        .populate("creator") // this is new
        .then((recipe)=> {
            res.render("recipes", {recipesLoop: recipe});
        })
        .catch((err)=> {
            console.log(err);
        })
})

app.get("/create", (req, res)=> {
    Cook
        .find()
        .then((cook)=> {
            res.render("cook/create", {cookHbs: cook});
        })
        .catch((err)=> {
            res.send("error")
        })
})

app.post("/create", (req, res)=> {
    Cook
        .create({
            title: req.body.title,
            description: req.body.description,
            rating: req.body.rating,
            image_url: req.body.image_url,
            author: req.body.author 
        })
        .then((cook)=> {
            res.send("ok")
        })
})

module.exports = app;