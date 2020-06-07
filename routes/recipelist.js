const express = require('express');
const app  = express.Router();
const Recipe = require('../models/recipe.js');

app.get("/list", (req,res)=> {
    Recipe.find({})
           .populate("creator") 
        .then((recipe)=> {
           // console.log(recipe);
            res.render("home.hbs", {recipe});
        })
        .catch((err)=> {
            res.render("error", err);
        })
  })
  



  module.exports = app;