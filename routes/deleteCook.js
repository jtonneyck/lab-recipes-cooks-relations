const express = require("express");
const app = express();
const Cook = require("../models/cook");

app.get("/cook/delete/:id", (req,res)=> {
    Cook.findByIdAndDelete(req.params.id)
    .then(() => res.redirect("/recipes"))
    .catch(err => console.log(err));
});

module.exports = app;