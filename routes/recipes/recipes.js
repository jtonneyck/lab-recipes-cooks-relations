const express = require("express");
const app = express();
const Recipe = require("../../models/recipe");
const Cook = require("../../models/cook");

app.get("/recipes", (req, res) => {
  Recipe.find({})
    .populate("creator")
    .then((allRecipesFromDB) => {
      res.render("recipes/list", { allRecipesFromDB: allRecipesFromDB });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = app;
