const express = require("express");
const app = express();
const Recipe = require("../../models/recipe");

app.get("/recipes/search", (req, res)=>{
    res.render("recipes/search")
})

app.post("/recipes/search/result", (req, res)=>{
    Recipe.find({ $text: { $search: req.body.search} })
    .then((recipe)=>{
        res.render("recipes/list", {recipes: recipe})
    })
    .catch((err)=> {
        console.log(err);
    })
})

module.exports = app;