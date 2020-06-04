const express = require("express");
const app = express();
const Recipe = require("../../models/recipe");

app.get("/recipes/detail/:id", (req, res)=>{
    let objectId = req.params.id
    Recipe.findById(objectId)
        .populate("creator")
        .populate("reviews")
        .then((recipe)=>{
            res.render("recipes/detail", {recipe: recipe})
        })
    .catch((err)=> {
        console.log(err);
    })
})

module.exports = app;