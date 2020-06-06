const express = require("express");
const app = express();
const Cook = require("../../models/cook");

app.get("/cooks/delete/:id", (req, res)=>{
    let objectId = req.params.id
    Cook.findByIdAndDelete(objectId)
    .then((deletedCook)=>{
        res.redirect("/cooks")
    })
    .catch((err)=> {
        console.log(err);
    })
})

module.exports = app;