const express = require("express");
const app = express();
const Cook = require("../../models/cook");

app.get("/cooks/detail/:id", (req, res)=>{
    let objectId = req.params.id
    Cook.findById(objectId)
    .then((cook)=>{
        res.render("cooks/detail", {cook: cook})
    })
    .catch((err)=> {
        console.log(err);
    })
})

module.exports = app;