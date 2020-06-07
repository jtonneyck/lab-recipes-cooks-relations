const express = require("express");
const app = express();
const Cook = require("../../models/cook");

app.get("/cooks/delete", (req, res) => {
  const cookId = req.query.id;

  console.log(cookId);
  Cook.findByIdAndDelete(cookId)
    .then((cook) => {
      res.redirect("/cooks/allCooks");
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = app;
