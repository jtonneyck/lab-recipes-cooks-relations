const express = require("express");
const app = express();
const Recipe = require("../models/recipe");
const Cook = require("../models/cook");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  Cook.find()
    .then(cooks => {
      res.render("cooks/list.hbs", {allCooks: cooks});
    })
    .catch(err => {
      res.render("error", err);
    });
});

//CREATE
app.get("/create", (req, res) => {
  res.render("cooks/create.hbs");
});

app.post("/create", (req, res) => {
  Cook
    .create({
      name: req.body.name,
      image: req.body.image
  })
    .then(newRecipe => {
      res.redirect("/cooks");
    })
    .catch(error => {
      res.send("error", error);
    });
});

// UPDATE
app.get("/:id/update", (req, res) => {
  Cook.findById(req.params.id)
    .then((cooks)=> {
      res.render("cooks/update.hbs", {cooksHbs: cooks});
  })
    .catch(err => {
      res.render("error", err);
    });
});

app.post("/:id/update", (req, res) => {
  Cook.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    image: req.body.image
  })
    .then(() => {
      res.redirect(`/cooks/${req.params.id}`);
    })
    .catch(err => {
      console.log("this is an error", err);
      res.send("error", err);
    });
});

//COOK DETAIL
app.get("/:id", (req, res) => {
  Cook
    .findById(req.params.id)
    .then(cook => {
      res.render("cooks/detail.hbs", {oneCook: cook});
    })
    .catch(err => {
      console.log("this is an error", err);
      res.send("error", err);
    });
});

//DELETE
app.get("/:id/delete", (req, res) => {
  Cook
    .findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect("/cooks");
    })
    .catch(err => {
      console.log("this is an error", err);
      res.send("error", err);
    });
});

module.exports = app;

