const express = require("express");
const app = express();
const User = require("../models/user");

app.get("/user/login", (req,res)=> {
    res.render("loginUser");
});

app.post("/user/login", (req,res)=> {
    User.findOne({username: req.body.username})
    .then(user => {
        if (!user){
            res.send("Ivalid credentials");
        }
        else if (req.body.password === user.password){
            req.session.currentUser = user;
            res.redirect("/");
        }
        else {
            res.send("Ivalid credentials");
        }
    })
    .catch(err => console.log(err));
});

module.exports = app;