const express = require("express");
const app = express();
const Cook = require("../../models/Cook");


app.post("/createCook", (req, res) => {
    let newCook = req.body;
    Cook.create(newCook)
      .then((newCook) => {
        res.redirect(`/cook/listCooks`);
      })
      .catch((err) => {
        console.log("Err",err)
      })
})

app.get("/createCook", (req,res) => {
  res.render("cooks/createCook")
})

  module.exports = app;