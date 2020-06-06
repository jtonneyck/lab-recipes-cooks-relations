const express = require("express");
const app = express();
const Cook = require("../../models/cook");

app.get("/cooks/list", (req, res) => {
    Cook
      .find({})
      .then((cooks) => {
        res.render("cooks/list", {cooks});
      })
      .catch((err) => {
        console.log(err)
      })
})

module.exports = app;