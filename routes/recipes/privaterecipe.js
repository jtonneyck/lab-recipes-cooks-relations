const express = require('express')
const app = express()

const Recipe = require("../../models/recipe.js");
const Cook = require("../../models/cook.js");

app.get('/recipes/privaterecipe', (req, res, next) =>{
    Recipe.findOne({ title: "Limoncello, di Nardini" })
        .populate('creator')
        .then((recipes)=>{
            res.render('recipes/privaterecipe', {recipes : recipes})
        })
})

module.exports = app