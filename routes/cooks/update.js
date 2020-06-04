const express = require("express");
const app = express();
const Cook = require("../../models/cook");

app.get("/cooks/update/:id", (req, res) =>{
    let objectId = req.params.id;
    Cook.findById(objectId)
    .then((cook)=>{
        res.render("cooks/update", {cook: cook})
    })
    .catch((err)=> {
        res.render(err);
    })
})

app.post("/cooks/update", (req, res)=>{
    let cookId = req.body.id;
    Cook.findByIdAndUpdate(cookId, {
        name: req.body.name,
        image: req.body.image
    })
    .then((cook)=>{
        res.redirect(`detail/${cook._id}`)
    })
    .catch((err)=> {
        res.render(err);
    })
})

module.exports = app;