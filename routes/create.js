const express = require("express");
const app = express();
const Cook = require("../models/cook",);
const Recipe = require("../models/recipe");


app.get("/cooks-details/:id", (req, res)=> {
    Cook
        .findById(req.params.id)
        .then((cook)=> {
            res.render("cooks-details", {cookHbs: cook});
        })
        .catch((err)=> {
            res.send("error")
        })
})



app.get("/create-cook", (req, res)=> {
    Cook
        .create({
            name: req.body.name,
            image_url: req.body.image
        })
        .then((cook)=> {
            res.send("ok")
        })
})

app.post("/create-cook", (req, res)=> {
    Cook
        .create({
            name: req.body.name,
            image_url: req.body.image
        })
        .then((cook)=> {
            res.send("ok")
        })
})

module.exports = app;