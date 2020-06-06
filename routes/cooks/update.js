const express = require("express");
const app = express();
const Cook = require("../../models/cook");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/cooks/update", (req, res) => {

  Cook
    .findById(req.query.id)
    .then((cook) => {
      res.render("cooks/update", { cook: cook });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/cooks/update", (req, res) => {

  let cookId = req.query.id;
  const {name,image} = req.body;

  Cook
    .findByIdAndUpdate(cookId, {name,image})
    .then((cook) => {
      res.redirect(`/cooks/detail/?id=${cook._id}`);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = app;
