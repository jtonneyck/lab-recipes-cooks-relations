const express = require('express');
const app  = express.Router();
const Recipe = require('../models/recipe.js');
const Cook = require('../models/cook.js');


app.get("/create", (req,res)=> {

    Cook
    .find()
    .then((cooks) => {
        res.render("recipecreate", {cooks})
    })  
})

app.post("/recipe/createdata", (req, res) => {
Recipe
.create({
title:req.body.title,
ingredients:req.body.ingredients,
cuisine:req.body.cuisine,
duration:req.body.duration,
creator:req.body.creator

})

.then((recipeData)=> {
        //console.log("added:",recipeData)
        res.redirect(`/list`);
    })
    .catch((err)=> {
        res.send(err);
    })
})


  module.exports = app;