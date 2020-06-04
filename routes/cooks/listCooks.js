const express = require("express");
const app = express();
const Cook = require("../../models/Cook");


app.get('/cooks/listCooks', (req, res) => {
    Cook
    .find({})
    .then(cooks => {
      res.render('cooks/listCooks',{cooks: cooks});
    });
  })
  

module.exports = app;