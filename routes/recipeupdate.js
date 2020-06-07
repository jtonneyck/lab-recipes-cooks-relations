const express = require('express');
const app  = express.Router();
const Recipe = require('../models/recipe.js');

app.get("/update/:id", (req,res)=> {
   // console.log(req.param.id)
  
  Recipe.findById(req.params.id)
        .then((data) => {
        // console.log(data);      
            res.render("recipeupdate", {upload:data});
      })
    
         .catch( (err) => {
              res.send('error')
  })
  })
  
  app.post("/update/:id", (req,res)=> {
    Recipe
        .findByIdAndUpdate(req.params.id,{
            title:req.body.title,
            level:req.body.level,
            ingredients:[],
            cuisine:req.body.cuisine,
            dishType:req.body.dishType,
            image:req.body.imageUrl,
            duration:req.body.duration,
            creator:req.body.creator
        })
        .then((recipeData)=> {
            res.redirect(`/list`);
        })
        .catch((err)=> {
            res.send(err);
        })
  })



  module.exports = app;