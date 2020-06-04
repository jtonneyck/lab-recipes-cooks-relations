const express = require('express');
const app = express();
const Recipe = require("../../models/Recipe");
const Review = require("../../models/Review");

app.post('/reviews/add', (req, res) => {
    let newReview = req.body
    let recipeId = req.query.recipe_id
    Review.create(newReview)
        .then((newReview) => {
            Recipe.findByIdAndUpdate(
                recipeId, { $push: { reviews: newReview }}
            )
            .then((recipe) => {
                res.render("recipes/detailsRecipe", {recipe: recipe});
            })
        })

        
    .catch((error) => {
      console.log(error)
    })
})


module.exports = app;