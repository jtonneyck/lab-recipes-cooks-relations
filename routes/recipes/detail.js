const express = require("express");
const app = express();
const Recipe = require("../../models/recipe");

app.get("/detail", (req, res) => {
  const recipeId = req.query.id;

  Recipe.findById(recipeId)
    .populate("creator")
    .populate("reviews")
    .then((recipe) => {
      let isReviewExist = true;
      console.log("reviews length", recipe.reviews.length);

      if (recipe.reviews.length === 0) {
        isReviewExist = false; //no reviews present
      } else {
        isReviewExist = true;
      }
      res.render("recipes/detail", {
        recipe: recipe,
        isReviewExist: isReviewExist,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = app;
