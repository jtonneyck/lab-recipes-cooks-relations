const express = require('express');
const app  = express.Router();
const Cook = require('../models/cook.js');

app.get("/cookcreate", (req,res)=> {
    res.render("cookcreate.hbs");
})

app.post("/cook/createdata", (req, res) => {
Cook
.create({
name:req.body.name,
image:req.body.image

})

.then((cookData)=> {
        //console.log("added:",recipeData)
        res.redirect(`/cook`);
    })
    .catch((err)=> {
        res.send(err);
    })
})


  module.exports = app;