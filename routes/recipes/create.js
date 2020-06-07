const express = require("express");
const app = express();
const Recipe = require("../../models/recipe");
const Cook = require("../../models/cook");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/create", (req, res) => {
  Cook.find({}).then((cooks) => {
    res.render("recipes/create", { cooks: cooks });
  });
});

app.post("/create", (req, res) => {
  let {
    title,
    level,
    cuisine,
    dishType,
    creator,
    duration,
    image,
    ingredients,
  } = req.body;

  ingredients = ingredients.split(",");

  const newRecipe = new Recipe({
    title,
    level,
    cuisine,
    dishType,
    creator,
    duration,
    image,
    ingredients,
  });

  Recipe.create(newRecipe)
    .then((savedRecipe) => {
      res.redirect("/recipes/recipes");
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = app;
