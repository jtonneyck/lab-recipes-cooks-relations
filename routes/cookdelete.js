const express = require('express');
const app  = express.Router();
const Cook = require('../models/cook.js');

app.get("/cookdelete/:id", (req,res)=> {
    Cook.findByIdAndDelete(req.params.id)
        .then((cook)=> {
        //  console.log(cook);
  
          res.redirect("/cook");
          //res.render("delete.hbs", {cook});
        })
        .catch((err)=> {
            res.render("error", err);
        })    
  })



  module.exports = app;