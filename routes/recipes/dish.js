const express = require("express");
const app = express();
const Recipe = require("../../models/recipe");

app.get("/recipes/dish", (req, res)=>{
    res.render("recipes/dishes/checkboxes")
})

app.post("/recipes/dish/result", (req, res)=>{
    Recipe.find({
        dishType : {$in: req.body.dishType}
    })
    .then((recipe)=>{
        res.render("recipes/list", {recipes: recipe})
    })
    .catch((err)=> {
        console.log(err);
    })
})

module.exports = app;