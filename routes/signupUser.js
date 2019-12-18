const express = require("express");
const app = express();
const User = require("../models/user");
const bcrypt = require("bcrypt");

app.get("/user/signup", (req,res)=> {
    res.render("signupUser");
});


app.post("/user/signup", (req,res)=> {
    bcrypt.hash(req.body.password, 5, function(err, hash) {
    if (err){
        res.send("error")
    }else {        
        User.create({
            username: req.body.username,
            password: hash,
            })
            .then(res.redirect("/"))
            .catch(err => console.log(err));
        }
      });
});

module.exports = app;