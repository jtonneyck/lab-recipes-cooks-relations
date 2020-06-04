const express = require("express");
const app = express();
const Cook = require("../../models/cook");

app.get("/cooks/delete", (req, res) => {
    let creatorIdToDelete = req.query.id;
    Cook
      .findByIdAndDelete(creatorIdToDelete)
      .then((deleteCook) => {
        res.redirect("/list")
      })
      .catch((err) => {
        console.log(err)
      })
})

module.exports = app;