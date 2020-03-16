const express = require("express");
const app = express();
const Recipe = require("../models/recipe");
const Cook = require("../models/cook");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  Recipe.find()
    .then(allRecipes => {
      res.render("recipes/list.hbs", { allRecipes: allRecipes });
    })
    .catch(err => {
      res.render("error", err);
    });
});

//CREATE
app.get("/create", (req, res) => {
  Cook.find()
    .then(cooks => {
      res.render("recipes/create", {cooksHbs: cooks});
    })
    .catch(err => {
      res.send("error", err);
    });
});

app.post("/create", (req, res) => {
  Recipe.create({
    title: req.body.title,
    cuisine: req.body.cuisine,
    duration: req.body.duration,
    dishType: req.body.dishType,
    level: req.body.level,
    ingredients: req.body.ingredients,
    image: req.body.image,
    creator: req.body.creator
  })
    .then(newRecipe => {
      res.redirect(`/recipes/${newRecipe.id}`);
    })
    .catch(error => {
      res.send("error", error);
    });
});

//UPDATE
app.get("/:id/update", (req, res) => {
  Cook
    .find()
    .then((cooks)=> {
      res.render("recipes/update.hbs", {cooksHbs: cooks});
  })
    .catch(err => {
      res.render("error", err);
    });

  Recipe
    .findById(req.params.id)
    .then(recipe => {
      res.render("recipes/update.hbs", {oneRecipe: recipe});
    })
    .catch(err => {
      res.render("error", err);
    });
});

app.post("/:id/update", (req, res) => {
  Recipe.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    cuisine: req.body.cuisine,
    duration: req.body.duration,
    dishType: req.body.dishType,
    level: req.body.level,
    ingredients: req.body.ingredients,
    image: req.body.image
  })
    .then(() => {
      res.redirect(`/recipes/${req.params.id}`);
    })
    .catch(err => {
      console.log("this is an error", err);
      res.send("error", err);
    });
});

//RECIPE DETAIL
app.get("/:id", (req, res) => {
  Recipe.findById(req.params.id)
    .populate("creator")
    .then(recipe => {
      console.log("the response is", recipe);
      res.render("recipes/detail.hbs", { oneRecipe: recipe });
    })
    .catch(err => {
      console.log("this is an error", err);
      res.send("error", err);
    });
});

//DELETE
app.get("/:id/delete", (req, res) => {
  Recipe.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect("/recipes");
    })
    .catch(err => {
      console.log("this is an error", err);
      res.send("error", err);
    });
});

module.exports = app;
