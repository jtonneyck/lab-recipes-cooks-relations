const express = require("express");
const app = express();
const Recipe = require("../../../models/recipe");
const Review = require("../../../models/review");

app.post("/recipes/reviews/create/:id", (req, res)=>{
    let newReview = req.body;
    let recipeId = req.params.id;
    Review.create(newReview)
        .then((review)=>{
            return Recipe.findByIdAndUpdate(recipeId, { $push: { reviews: review.id }});
        })
        .then((recipe)=>{
            res.redirect(`/recipes/detail/${recipeId}`)
        })
        .catch((err)=> {
            console.log(err);
        })
    .catch((err)=> {
        console.log(err);
    })
})
module.exports = app;