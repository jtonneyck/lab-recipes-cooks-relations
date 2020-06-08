const express = require("express");
const app = express();
const Cook = require("../../models/Cook");

app.get("/deleteCook", (req, res) => {
    let cookToDelete = req.query.id
    Cook.findByIdAndDelete(cookToDelete)
      .then((cookDeleted) => {
        res.redirect("/cook/listCooks");
      })
      .catch((err) => {
        console.log("Err",err)
      })
})

module.exports = app;


