const express = require("express");
const app = express();
const Recipe = require("../../models/recipe");
const Cook = require("../../models/cook");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/update", (req, res) => {
  
  // var isCookForRecipe = false
  Recipe
    .findById(req.query.id)
    .populate('creator')
    .then((recipe) => {
      Cook
        .find({})
        .then(cooks=>{
          
          const cooksProcessed = cooks.map(cook=>{
            let cooksModified = {};

            if(recipe.creator!==null && cook.name===recipe.creator.name){
                cooksModified = {
                  name:cook.name,
                  isCookForRecipe:true,
                  id: cook.id
                }
            }
            else {
              cooksModified = {
                name:cook.name,
                isCookForRecipe:false,
                id: cook.id
              }
            }

            return cooksModified;
            
          })
          res.render("recipes/update", { recipe: recipe, cooks:cooksProcessed });
        })
      
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/update", (req, res) => {
  debugger
  let recipeId = req.query.id;

  console.log('creator', req.body.creator);

  Recipe.findByIdAndUpdate(recipeId, {
    title: req.body.title,
    level: req.body.level,
    cuisine: req.body.cuisine,
    dishType: req.body.dishType,
    duration: req.body.duration,
    creator:req.body.creator,
    image: req.body.image,
    ingredients: req.body.ingredients.split(","),
  })
    .then((recipe) => {
      res.redirect(`/recipes/detail/?id=${recipe._id}`);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = app;
