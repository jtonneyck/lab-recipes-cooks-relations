const express = require("express");
const app = express();
const Recipe = require("../../models/recipe");

app.get("/recipes/delete", (req, res) => {
    let objectIdToDelete = req.query.id;
    Recipe
      .findByIdAndDelete(objectIdToDelete)
      .then((deleteRecipe) => {
        res.redirect("/")
      })
      .catch((err) => {
        console.log(err)
      })
})

module.exports = app;