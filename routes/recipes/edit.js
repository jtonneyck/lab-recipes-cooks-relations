const express = require('express')
const app = express()
const Recipe = require("../../models/recipe.js");

app.get('/recipes/details/edit', (req, res, next) => {
    const idToEditRecipe = req.query.id

    Recipe.findOne({ _id: idToEditRecipe})
        .then(recipes => {
            res.render(`recipes/edit`, {recipes})
        })
        .catch(error => {
            console.log("Error filling form", error)
        })
})

app.post('/recipes/details/edit', (req, res, next) => {
    const idToEditRecipe = req.body.id

    Recipe.findOneAndUpdate({ _id: idToEditRecipe }, {
        $set:  {
            title: req.body.title,
            level: req.body.level, 
            /*ingredients,*/ 
            cuisine: req.body.cuisine, 
            dishType: req.body.dishType, 
            image: req.body.image, 
            duration: req.body.duration, 
            creator: req.body.creator, 
            created: req.body.created 
        }
    })
    .then(() => {
        res.redirect(`/recipes/details/?id=${idToEditRecipe}`);
    })
    .catch((error) => {
        console.log(error);
    })
});

module.exports = app;