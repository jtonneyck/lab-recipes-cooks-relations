const express = require("express");
const app = express();

app.get("/recipes/search", (req, res)=>{
    res.render("recipes/search/home")
})

module.exports = app;