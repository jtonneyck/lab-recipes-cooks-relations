const express = require("express");
const app = express();
const User = require("../models/user");
const bcrypt = require("bcrypt");

app.get("/user/login", (req,res)=> {
    res.render("loginUser");
});

app.post("/user/login", (req,res)=> {
    User.findOne({username: req.body.username})
    .then(user => {
        if (!user){
            res.send("Ivalid credentials");
        }
        else{
            bcrypt.compare(req.body.password, user.password, function(err, correct) {
                if(correct){
                    req.session.currentUser = user;
            res.redirect("/");
                } else {
                    res.send(console.log("Ivalid credentials"))
                } 
            });
        }})
    .catch(err => console.log(err));
});

module.exports = app;