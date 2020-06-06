const express = require("express");
const app = express();
const User = require("../../models/user");

app.get("/users/login", (req, res) => {
    res.render("users/login")
})

app.post("/users/login", (req, res) => {
    User
        .findOne({
            username: req.body.username
        })
        .then((user) => {
            if (!user) {
               res.redirect("users/login"); 
            } else if (user.password === req.body.password) {
                res.redirect("/")
            }
        })
})

module.exports = app;