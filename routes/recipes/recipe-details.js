const express = require("express");
const app = express();
const Recipe = require("../../models/recipe");
const Cook = require("../../models/cook");

app.get("/recipes/details", (req, res) => {
    let objectID = req.query.id;
    Recipe
      .findById(objectID)
      .populate("creator")
      .then((recipe) => {
        res.render("recipes/recipe-details.hbs", {recipe})
      })
      .catch((err) => {
        console.log(err)
      })
})

module.exports = app;