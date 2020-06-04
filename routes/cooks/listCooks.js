const express = require("express");
const app = express();
const Recipe = require("../../models/Recipe");
const Cook = require("../../models/Cook");


app.get('/cooks/listCooks', (req, res) => {
    Cook
    .find({})
    .then(cooks => {
      res.render('cooks/listCooks',{cooks: cooks});
    });
  })
  

module.exports = app;