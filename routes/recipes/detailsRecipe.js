const express = require('express');
const app = express();
const Recipe = require("../../models/Recipe");

app.get("/details", (req, res) => {
    let objectId = req.query.id
    Recipe.findById(objectId)
    .populate('creator')
    .populate('reviews')
        .then((recipe) => {
            res.render("recipes/detailsRecipe", {recipe: recipe});
        })
      .catch((err) => {
        console.log("Err",err)
      })
})

module.exports = app;
