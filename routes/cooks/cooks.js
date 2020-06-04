const express = require("express");
const app = express();
const Cook = require("../../models/cook");

app.get("/cooks", (req,res)=> {
    Cook.find({})
        .then((cooks)=> {
            res.render("cooks/list", {cooks:cooks});
        })
        .catch((err)=> {
            res.render("error", err);
        })
})

module.exports = app;