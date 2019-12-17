const express = require("express");
const app = express();
const User = require("../models/user");

app.get("/user/signup", (req,res)=> {
    res.render("signupUser");
});

app.post("/user/signup", (req,res)=> {
    User.create({
    username: req.body.username,
    password: req.body.password,
    })
    .then(res.redirect("/"))
    .catch(err => console.log(err));
});

module.exports = app;