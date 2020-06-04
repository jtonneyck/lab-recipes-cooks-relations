const express = require("express");
const app = express();
const Recipe = require("../../../models/recipe");
const Review = require("../../../models/review");

app.get("/recipes/reviews/:id", (req, res)=>{
    let objectId = req.params.id;
    Recipe.findById(objectId)
    .then((recipe)=>{
        res.render("recipes/reviews/create", {recipe: recipe})
    })
    .catch((err)=> {
        res.render(err);
    })
})

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
            res.render(err);
        })
    .catch((err)=> {
        res.render(err);
    })
})
module.exports = app;