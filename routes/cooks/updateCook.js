const express = require("express");
const app = express();
const Cook = require("../../models/Cook");


app.get('/cooks/updateCook', (req, res) => {
    let objectId = req.query.id;
    Cook.findById(objectId)
    .then((cook) => {
      res.render("cooks/updateCook", {cook: cook});
    })
    .catch((error) => {
      console.log(error);
    })
});


app.post("/cooks/updateCook", (req, res) => {
    let cookId = req.body._id;
    Cook.findByIdAndUpdate(cookId, {
        name: req.body.name,
        image: req.body.image,
    })
      .then((updatedCook) => {
        res.redirect(`/cooks/listCooks`);
      })
      .catch((err) => {
        console.log("Err",err)
      })
})
  module.exports = app;