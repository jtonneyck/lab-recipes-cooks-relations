const express = require('express');
const app = express();
const Recipe = require("../../models/Recipe");

app.get('/search', (req, res) => {
    let searchTerm = String(req.query.search);
    Recipe.find(
        { $text: { $search: searchTerm}}
    )
    .then(recipes => {
        res.render('recipes/searchRecipe',{recipes: recipes});
    })
    .catch((err) => {
        console.log("Err",err)
    })
});

module.exports = app;
