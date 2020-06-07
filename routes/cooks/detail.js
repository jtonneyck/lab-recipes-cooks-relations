const express = require("express");
const app = express();
const Cook = require("../../models/cook");

app.get("/cooks/detail", (req, res) => {
  const cookId = req.query.id;

  console.log("Cook Id", cookId);

  Cook.findById(cookId)
    .then((cook) => {
      res.render("cooks/detail", { cook: cook });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = app;
