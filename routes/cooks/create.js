const express = require("express");
const app = express();
const Cook = require("../../models/cook");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/cooks/create", (req, res) => {
  res.render("cooks/create");
});

app.post("/cooks/create", (req, res) => {
  const { name, image } = req.body;

  const newCook = new Cook({ name, image });

  Cook.create(newCook)
    .then((savedCook) => {
      res.redirect("/cooks/allCooks");
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = app;
