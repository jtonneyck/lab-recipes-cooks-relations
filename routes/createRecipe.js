const express = require("express");
const app = express();
const Recipes = require("../models/recipe");
const Cooks = require("../models/cook");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}))

app.get("/", (req, res) =>{
    Cooks
        .find()
        .then((cooksInfo)=> {
            res.render("recipe/create", {cooks: cooksInfo});
        })
   
})

app.post("/", (req, res) =>{
    Recipes
        .create({
            title: req.body.title,
            level: req.body.level,
            ingredients: req.body.ingredients,
            cuisine: req.body.cuisine,
            dishType: req.body.dishType,
            duration: req.body.duration,
            creator: req.body.creator,
        })
        .then((newCook) =>{
            res.redirect("/");
        })
        .catch((error) =>{
            console.log(error)
        })
})

module.exports = app;