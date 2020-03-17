const express = require("express");
const app = express();
const Recipe = require("../models/recipe");
const Cook = require("../models/cook")

app.get("/update/:id", (req,res)=> {
    Cook
        .findById(req.params.id)
        .then((cook)=> {
            res.render("cook-update", {cookHbs: cook});
        })
        .catch((err)=> {
            res.send("Error");
        })
})

app.post("/update/:id", (req,res)=> {
    Cook
        .findByIdAndUpdate(req.params.id,{
            name: req.body.name,
            image: req.body.image,
        })
        .then((cook)=> {
            res.redirect(`/cook-detail/${cook._id}`);
        })
        .catch((err)=> {
            res.send("err");
        })
})

module.exports = app;