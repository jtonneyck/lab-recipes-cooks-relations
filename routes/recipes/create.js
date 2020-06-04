const express = require("express");
const app = express();
const Recipe = require("../../models/recipe");
const Cook = require("../../models/cook");

app.get("/recipes/create", (req, res)=>{
    Cook.find()
    .then((creator)=>{
        res.render("recipes/create", {cooks: creator});
    })
})

app.post("/recipes/create", (req, res)=>{
    let newRecipe = req.body;
    console.log(newRecipe);
    // The field cuisine is required, add default value if not completed
    if (newRecipe.title === "" ){
        newRecipe.title = "No title";
    }
    if (newRecipe.cuisine === "" ){
        newRecipe.cuisine = "unknown";
    }
    if (newRecipe.image === "" ){
        newRecipe.image = "https://images.media-allrecipes.com/images/75131.jpg";
    }
    Recipe.create(newRecipe)
    .then((recipe)=>{
        res.redirect(`/recipes/detail/${recipe._id}`)
    })
    .catch((err)=> {
        // res.render(err);
        console.log(err)
    })
})

module.exports = app;