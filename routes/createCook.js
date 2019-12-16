const express = require("express");
const app = express();
const Cook = require("../models/cook");

app.get("/cook/create", (req,res)=> {
    res.render("cookCreate");
});

app.post("/cook/create", (req,res)=> {
    Cook.create({
    name: req.body.name,
    image: req.body.image,
    })
    .then(res.redirect("/recipes"))
    .catch(err => console.log(err));
});

module.exports = app;