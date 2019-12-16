const express = require("express");
const router = express.Router();
const Recipe = require("../models/recipe");
const Cook = require("../models/cook");
const bodyParser = require("body-parser");

router.get("/cook/edit/:id", (req, res) => {
Cook.findById(req.params.id)
.then(cook => res.render("editCook", {cook}))
.catch(err => console.log(err));
});

router.post("/cook/edit/:id", (req, res) =>
Cook.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    image: req.body.image
})
.then(() => res.redirect("/recipes"))
.catch(err => console.log(err))
);

module.exports = router;