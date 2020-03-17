const express = require("express");
const app = express();
const Recipe = require("../models/recipe");
const Cook = require("../models/cook")

app.get("/cook-detail/:id", (req, res)=> {
    Cook
        .findById(req.params.id)
        .then((cook)=> {
            res.render("cook-detail", {cookHbs: cook});
        })
        .catch((err)=> {
            res.send("error")
        })
})

module.exports = app;