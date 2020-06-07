const express = require("express");
const app = express();
const Cook = require("../../models/cook");

app.get("/cooks/allCooks", (req, res) => {
  Cook.find({})
    .then((allCooksFromDB) => {
      res.render("cooks/list", { allCooksFromDB: allCooksFromDB });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = app;
