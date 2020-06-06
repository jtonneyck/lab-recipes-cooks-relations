const express = require("express");
const app = express();
const Recipe = require("../../models/recipe");

app.get("/recipes/update/:id", (req, res) =>{
    let objectId = req.params.id;
    Recipe.findById(objectId)
    .then((recipe)=>{
        switch(recipe.level){
            case 'Easy Peasy':
                recipe.easy = true;
                break;
            case 'Amateur Chef':
                recipe.medium = true;
                break;
            case 'UltraPro Chef':
                recipe.hard = true;
                break;
            default:
                break; 
        }
        switch(recipe.dishType){
            case 'breakfast':
                recipe.breakfast = true;
                break;
            case 'main_course':
                recipe.main_course = true;
                break;
            case 'soup':
                recipe.soup = true;
                break;
            case 'snack':
                recipe.snack = true;
                break;
            case 'drink':
                recipe.drink = true;
                break;
            case 'dessert':
                recipe.dessert = true;
                break;
            case 'other':
                recipe.other = true;
                break;
            default:
                break; 
        }
        res.render("recipes/update", {recipe: recipe})
    })
    .catch((err)=> {
        console.log(err);
    })
})

app.post("/recipes/update", (req, res)=>{
    let recipeId = req.body.id;
    Recipe.findByIdAndUpdate(recipeId, {
        title: req.body.title,
        image: req.body.image,
        level: req.body.level,
        cuisine: req.body.cuisine,
        creator: req.body.creator,
        dishType: req.body.dishType,
        ingredients: req.body.ingredients
    })
    .then((recipe)=>{
        res.redirect(`detail/${recipe._id}`)
    })
    .catch((err)=> {
        console.log(err);
    })
})

module.exports = app;