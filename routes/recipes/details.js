const express = require('express');
const app = express();
const Recipe = require("../../models/recipe.js");
const Cook = require("../../models/cook.js");
const Review = require("../../models/review.js");

app.get("/recipes/details/", (req, res, next) => {
    const idToLoad = req.query.id

    Recipe.findById(idToLoad)
        .populate('creator')
        .populate('reviews')
        .then((recipes) => {
            console.log(recipes)
            res.render('recipes/details', { recipes: recipes })
        })
        .catch((error) => {
            console.log("Error with loading recipe details", error)
        })
})

app.post("/recipes/details/", (req, res, next) => {
    const newReview = req.body;
    const idToAttach = req.body.id;

    Review.create(newReview)
        .then(review =>{
            console.log(review.id)
            Recipe.findById(idToAttach).update(
                {$push: {reviews: review.id}}
            )
        })
        .catch(error => {
            console.log("Review did not got added because of an error", error)
        })
        .then(
            res.redirect(`/recipes/details/?id=${idToAttach}`)
        )
        .catch(error => {
            console.log("page did not loaded", error)
        })
})

module.exports = app; 