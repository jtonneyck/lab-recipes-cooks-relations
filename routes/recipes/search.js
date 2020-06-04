const express = require('express');
const app = express();
const Recipe = require("../../models/recipe.js");

app.get("/recipes/search", (req, res, next) =>{
    res.render('recipes/search')
})

app.get("")


module.exports = app;