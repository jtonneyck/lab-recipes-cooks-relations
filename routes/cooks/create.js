const express = require("express");
const app = express();
const Cook = require("../../models/cook");

app.get("/cooks/create", (req, res)=>{
     res.render("cooks/create");
})

app.post("/cooks/create", (req, res)=>{
    let newCook = req.body;    
    Cook.create(newCook)
    .then((cook)=>{
        res.redirect(`/cooks/detail/${cooks._id}`)
    })
    .catch((err)=> {
        res.render(err);
    })
})

module.exports = app;