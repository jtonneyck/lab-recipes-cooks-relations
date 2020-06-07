const express = require("express");
const app = express();
const User = require("../../models/User");
const bcrypt = require('bcrypt');



app.post("/signup", (req, res) => {
    User.findOne({username: req.body.username})
    .then((user)=> {
        if(user){
            res.redirect("/user/signup?error=Username+Taken");
        } else {
            bcrypt.hash(req.body.password, 10, function(err, hash){
                if(err){
                    console.log("Hashing error", err);
                } else {
                    User.create({
                        username: req.body.username,
                        password: hash
                    })
                    .then((user)=> {
                        res.redirect("/user/login")
                    })
                    .catch((err)=> {
                        console.log(err);
                    })
                }
            })
        }
    })
})

app.get("/signup", (req,res) => {
    if(req.query.error){
        res.render("users/signup", {error: true, message: req.query.error});
    } else {
        res.render("users/signup");
    }
})

module.exports = app;