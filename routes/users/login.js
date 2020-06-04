const express = require("express");
const app = express();
const User = require("../../models/user");

app.get("/users/login", (req, res)=>{
    res.render("users/login");
})

app.post("/users/login", (req, res)=>{
    User.findOne({username: req.body.username})
    .then((user)=>{
        if(!user || user.password !== req.body.password){
            res.redirect("/users/login")
        } else {
            req.session.user = user;

            res.redirect("/")
        }
        
    })
    .catch((err)=>{
        console.log(err);
    })
})

module.exports = app;