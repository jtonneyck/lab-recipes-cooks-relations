const express = require("express");
const app = express();
const Recipe = require("../../models/recipe");

app.get("/recipes/search/cuisine", (req, res)=>{
    res.render("recipes/search/cuisine")
})

app.post("/recipes/search/cuisine/result", (req, res)=>{
    Recipe.find({
        cuisine : {$in: req.body.cuisine}
    })
    .then((recipe)=>{
        res.render("recipes/list", {recipes: recipe})
    })
    .catch((err)=> {
        console.log(err);
    })
})

module.exports = app;