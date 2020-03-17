const express = require("express");
const app = express();
const Recipe = require("../models/recipe");
const Cook = require("../models/cook");
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/create-recipe", (req,res)=> {
    Cook
    .find()
    .then((cook)=> {
        res.render("recipe-create", {cooksHbs: cook});
    })
    .catch((err)=> {
        res.send("error")
    })
})

app.post("/create-recipe", (req,res)=> {
    Recipe
    .create({
        title: req.body.title,
        cuisine: req.body.cuisine,
        duration: req.body.duration,
        creator: req.body.creator
    })
    .then((recipe)=> {
        res.redirect("/");
    })
    .catch((err)=> {
        console.log("Error:", err)
    })
})


module.exports = app;