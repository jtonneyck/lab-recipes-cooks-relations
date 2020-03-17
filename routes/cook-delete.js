const express = require("express");
const app = express();
const Recipe = require("../models/recipe");
const Cook = require("../models/cook")



app.get("/cook-detail/delete/:id", (req, res)=>{
    Cook   
        .findByIdAndDelete(req.params.id)
        .then((cook)=>{
            res.redirect("/")
        })
        .catch((error)=>{
            console.log("Error:", error)
        })
})

module.exports = app;