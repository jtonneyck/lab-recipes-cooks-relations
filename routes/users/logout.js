const express = require('express')
const app = express()
const User = require("../../models/user.js");

app.get("/logout", (req, res, next) => {
    req.session.destroy((err) => {
        res.redirect("/login");
    });
});

module.exports = app;