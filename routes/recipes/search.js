const express = require("express");
const app = express();
const Recipe = require("../../models/recipe");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/search", (req, res) => {
    res.render("recipes/search");
});

app.post("/search", (req,res)=>{
    var searchTerm = req.body.search;
    Recipe
        .find({title:{$eq : searchTerm}})
        .then((matchingRecipes=>{
            console.log(matchingRecipes.length);
            res.render('recipes/list',{allRecipesFromDB:matchingRecipes});
        }))
        .catch(err=>{
            console.log(err);
        })

})

module.exports = app;
