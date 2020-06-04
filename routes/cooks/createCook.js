const express = require("express");
const app = express();
const Cook = require("../../models/Cook");


app.post("/cooks/createCook", (req, res) => {
    let newCook = req.body;
    Cook.create(newCook)
      .then((newCook) => {
        res.redirect(`/cooks/listCooks`);
      })
      .catch((err) => {
        console.log("Err",err)
      })
})

app.get("/cooks/createCook", (req,res) => {
  res.render("cooks/createCook")
})

  module.exports = app;