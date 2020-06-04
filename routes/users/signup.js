const express = require('express')
const app = express()
const User = require("../../models/user.js");

app.get("/signup", (req, res, next) => {
    res.render("users/signup")
})

app.post("/signup", (req, res, next) => {
    const newSignUp = req.body;
    User.create(newSignUp)
        .then(user => {
            res.redirect(`/login`);
        })
        .catch(error => {
            console.log("Error! No sign up.", error)
        })
})

module.exports = app;

