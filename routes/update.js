const express = require("express");
const app = express();
const Recipes = require("../models/recipe");
const Cooks = require("../models/cook");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}))


app.get("/:id", (req,res) =>{
    Cooks
    .findById(req.params.id)
    .then((updateCook) =>{
        res.render("cooks/update", {cook: updateCook});
    })
    .catch((error) =>{
        console.log(error);
    })
})

app.post("/:id", (req, res) =>{
    Cooks
    .findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        image: req.body.image
    })
    .then((cook) =>{
        res.redirect(`/detail/${cook.id}`);
    })
    .catch((error) =>{
        console.log(error);
    })
})

module.exports = app;