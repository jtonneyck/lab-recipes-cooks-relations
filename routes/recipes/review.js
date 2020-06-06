const express = require("express");
const app = express();
const Recipe = require("../../models/recipe");
const Review = require("../../models/review");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));


app.post("/review", (req, res) => {
  
  let {title,text} = req.body;

  console.log('review title', req.body.title);
  console.log('review text', req.body.text);

  console.log('recipe id', req.body.recipeId);


  //add a new review to review collection
  const newReview = new Review({title,text});

  Review.create(newReview)
    .then((savedReview) => {
        Recipe
            .findByIdAndUpdate(
                {_id:req.body.recipeId},
                {$push:{reviews:savedReview}}
            )
            .then((updatedRecipe)=>{
                res.redirect(`/recipes/detail/?id=${updatedRecipe._id}`);
            })
    })
    .catch((err) => {
        console.log(err);
    });
});

module.exports = app;
