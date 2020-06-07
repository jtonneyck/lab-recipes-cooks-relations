const express = require('express');
const app  = express.Router();
const Cook = require('../models/cook.js');

app.get("/cook", (req,res)=> {
    Cook.find({})
        .then((cook)=> {
           // console.log(cook);
            res.render("cook.hbs", {cook});
        })
        .catch((err)=> {
            res.render("error", err);
        })
  })
  



  module.exports = app;