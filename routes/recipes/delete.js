const express = require("express");
const app = express();
const Recipe = require("../../models/recipe");

app.get("/recipes/delete/:id", (req, res)=>{
    let objectId = req.params.id
    Recipe.findByIdAndDelete(objectId)
    .then((deletedRecipe)=>{
        res.redirect("/recipes")
    })
    .catch((err)=> {
        console.log(err);
    })
})

module.exports = app;