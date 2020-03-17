const express = require("express");
const app = express();
const Recipe = require("../models/recipe");
const Cook = require("../models/cook");
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/create", (req,res)=> {
    res.render("cooks-create");
})

app.post("/create", (req,res)=> {
    Cook
    .findByIdAndUpdate(req.params.id,{
        name: req.body.name,
        image: req.body.image,
    })
    .then((cook)=> {
        res.redirect(`/cook/${cook._id}`);
    })
    .catch((err)=> {
        res.send("err");
    })
})

module.exports = app;