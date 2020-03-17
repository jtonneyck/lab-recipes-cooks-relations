const express = require("express");
const app = express();
const Cook = require("../models/cook",);
const Recipe = require("../models/recipe");

app.get("/cooks-details/delete/:id", (req, res)=> {
    Cook
        .findByIdAndDelete(req.params.id)
        .then((cook)=> {
            res.redirect("/")
        })
        .catch(error=>{
            console.log("error on delete",error)
        })
})

module.exports = app;