const express = require("express");
const app = express();
const Cook = require("../models/cook",);
const Recipe = require("../models/recipe");


app.get("/create-recipe", (req, res) => {
    Cook.find()
    .then(cook=>{
        res.render("create-recipe",{cookHbs:cook})
    })
  .catch((error)=>
  {
      console.log("Error creating",error)
  })       
})

app.post("/create-recipe", (req, res) => {
    Recipe.create({
        title: req.body.title,
        cuisine: req.body.cuisine,
        creator: req.body.creator,
        duration: req.body.duration
    })
    .then((recipe)=> {
        res.redirect("/");
    })
    .catch((err)=> {
        res.send("error");
    })
})
       
module.exports=app;