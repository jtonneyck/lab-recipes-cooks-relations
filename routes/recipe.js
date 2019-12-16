const express = require("express");
const router = express.Router();
const Recipe = require("../models/recipe");
const Cook = require("../models/cook");

router.get("/recipe/:id", (req, res) => {
Recipe.findById(req.params.id)
.populate("creator")
.then(recipe => res.render("recipe", {recipe}))
.catch(err => console.log(err));
});

module.exports = router;