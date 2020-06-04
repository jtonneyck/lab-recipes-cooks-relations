const express = require("express");
const app = express();
const User = require("../../models/user");

app.get("/users/signup", (req, res) => {
    res.render("users/signup")
})

app.post("/users/signup", (req, res) => {
    User
        .create(req.body)
        .then((user) => {
            res.redirect("/users/login")
        })
        .catch((err) => {
            console.log("err", err);
        })
})

module.exports = app;