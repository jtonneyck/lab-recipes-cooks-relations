const express = require("express");
const app = express();
const Recipe = require("../../models/recipe");

app.get("/", (req, res) => {
    Recipe
      .find({})
      .populate("creator")
      .then((recipes) => {
        res.render("recipes/list", {recipes});
      })
      .catch((err) => {
        console.log(err)
      })
})

module.exports = app;