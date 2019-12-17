const express = require("express");
const router = express.Router();
const Recipe = require("../models/recipe");

router.get("/", (req, res) => {
Recipe.find({})
.then(recipes => res.render("recipes", {recipes}))
.catch(err => console.log(err));
});

module.exports = router;