const express = require('express');
const app  = express.Router();
const Recipe = require('../models/recipe.js');

app.get("/recdelete/:id", (req,res)=> {
    Recipe.findByIdAndDelete(req.params.id)
        .then((recipe)=> {
          console.log(recipe);
  
          res.redirect("/list");
          //res.render("delete.hbs", {recipe});
        })
        .catch((err)=> {
            res.render("error", err);
        })    
  })



  module.exports = app;