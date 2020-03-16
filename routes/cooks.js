const express = require("express");
const app = express();
const Recipe = require("../models/recipe");
const Cook = require("../models/cook");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

//CREATE
app.get("/create", (req, res) => {
  Cook.find()
    .then(cooks => {
      res.render("cooks/create", {cooksHbs: cooks});
    })
    .catch(err => {
      res.send("error", err);
    });
});

app.post("/create", (req, res) => {
  Recipe.create({
    title: req.body.title,
    cuisine: req.body.cuisine,
    duration: req.body.duration,
    dishType: req.body.dishType,
    level: req.body.level,
    ingredients: req.body.ingredients,
    image: req.body.image,
    creator: req.body.creator
  })
    .then(newRecipe => {
      res.redirect(`/recipes/${newRecipe.id}`);
    })
    .catch(error => {
      res.send("error", error);
    });
});