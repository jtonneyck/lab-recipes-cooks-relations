const express = require("express");
const app = express();
const Cook = require("../models/cook");
const Recipe = require("../models/recipe");

app.get("/cooks-details/update/:id", (req, res) => {
    Cook
        .findById(req.params.id)
        .then((cook) => {
            res.render("update", {cookHbs: cook})
        })
        .catch(error => {
            console.log("error on update", error)
        })
})

app.post("/cooks-details/update/:id", (req, res) => {
    Cook
        .findByIdAndUpdate(req.params.id, {name:req.body.name,image:req.body.image})
        .then((cook) => {
           
            res.redirect(`/cooks-details/${cook._id}`)
        })
        .catch(error => {
            console.log("error on update", error)
        })
})


module.exports = app;