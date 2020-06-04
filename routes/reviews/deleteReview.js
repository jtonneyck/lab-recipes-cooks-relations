const express = require('express');
const app = express();
const Recipe = require("../../models/Recipe");
const Cook = require("../../models/Cook");
const Review = require("../../models/Review");


app.get("/reviews/deleteReview", (req, res) => {
    let reviewToDelete = req.query.id
    let recipeId = req.query.recipeId
    Review.findByIdAndDelete(reviewToDelete)
    .then((deletedReview) => {
        Recipe.findById(recipeId)
        .then((recipe) => {
          res.redirect(`/recipe/details?id=${recipe._id}`)
        })
      })
      .catch((err) => {
        console.log("Err",err)
      })
})

module.exports = app;
