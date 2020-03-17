const express = require("express");
const app = express();
const Recipes = require("../models/recipe");
const Cooks = require("../models/cook");

app.get("/:id", (req, res) =>{
    Cooks
    .findByIdAndDelete(req.params.id)
    .then((cook) =>{
        res.redirect("/");
    })
    .catch((error) =>{
        console.log(error);
    })
})

module.exports = app;