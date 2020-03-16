const express = require("express");
const app = express();
const Recipe = require("../models/Recipe");
const Cook = require("../models/Cook");

app.get("/", (req, res) => {
  Recipe
    .find()
    .populate("cook") // this is new
    .then((recipes) => {
      res.render("recipes/recipe.hbs", {
        recipesHbs: recipes
      });
    })
    .catch((err) => {
      console.log(err);
    })
})

// app.get("/create", (req, res) => {
//   Author
//     .find()
//     .then((authors) => {
//       res.render("book/create", {
//         authorsHbs: authors
//       });
//     })
//     .catch((err) => {
//       res.send("error")
//     })
// })

// app.post("/create", (req, res) => {
//   Book
//     .create({
//       title: req.body.title,
//       description: req.body.description,
//       rating: req.body.rating,
//       image_url: req.body.image_url,
//       author: req.body.author
//     })
//     .then((book) => {
//       res.send("ok")
//     })
// })

// module.exports = app;