const express = require('express');
const app = express();
const Recipe = require("../../models/Recipe");
const Review = require("../../models/Review");


app.get("/reviews/deleteReview", (req, res) => {
    let reviewToDelete = req.query.id
    let recipeId = req.query.recipeId
    Review.findByIdAndDelete(reviewToDelete)
    .then((deletedReview) => {
      Recipe.findByIdAndUpdate(
          recipeId, { $pull: { reviews: reviewToDelete }}
      )
      .then((recipe) => {
          res.redirect(`/recipe/details?id=${recipeId}`)
      })
      .catch((err) => {
        console.log("Err",err)
      })
  })  
      .catch((err) => {
        console.log("Err",err)
      })
})

module.exports = app;

