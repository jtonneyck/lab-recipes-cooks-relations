const express = require("express");
const app = express();
const Recipes = require("../models/recipe");
const Cooks = require("../models/cook");

app.get("/:id", (req,res)=> {
    Cooks  
        .findById(req.params.id)
        .then((cookData)=> { 
            res.render("cooks/detail", {cooks: cookData})
        })
        .catch((error)=> {
            console.log(error);
        })
})


module.exports = app;