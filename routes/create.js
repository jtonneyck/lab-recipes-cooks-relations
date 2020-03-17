const express = require("express");
const app = express();
const Recipes = require("../models/recipe");
const Cooks = require("../models/cook");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}))

app.get("/", (req, res) =>{
    res.render("cooks/create");
})

app.post("/", (req, res) =>{
    Cooks
        .create({
            name: req.body.name,
            image: req.body.image,
        })
        .then((newCook) =>{
            res.redirect("/");
        })
        .catch((error) =>{
            console.log(error)
        })
})

module.exports = app;