const express = require("express");
const app = express();
const Recipe = require("../../models/recipe");

app.get("/recipes/search/title", (req, res)=>{
    res.render("recipes/search/title")
})

app.post("/recipes/search/title/result", (req, res)=>{
    Recipe.find({
        title : {$in: req.body.title}
    })
    .then((recipe)=>{
        res.render("recipes/list", {recipes: recipe})
    })
    .catch((err)=> {
        res.render(err);
    })
})

module.exports = app;