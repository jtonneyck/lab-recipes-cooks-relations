const express = require('express');
const  app = express();
const Review = require('../../models/Review');
const Recipe = require('../../models/Recipe.model');

app.post('/review', (req, res)=> {
    
    const newReview = req.body;
    const recipeId = req.params.id
    Review.create(newReview)
    .then((review) => {
        return Recipe.findByIdAndUpdate(recipeId, {$push : {reviews : review.id}})
    })
    .then((recipe)=>{
        res.redirect('/')
    })
    .catch((error) => {
        console.log(error);
    })
});

module.exports = app