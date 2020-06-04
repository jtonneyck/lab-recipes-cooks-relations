const express = require('express')
const app = express()
const User = require("../../models/user.js");

app.get("/login", (req, res, next) => {
    res.render("users/login")
})

app.post("/login", (req, res, next) => {
    User.findOne({username: `${req.body.username}`})
        .then(user =>{
            if (!user){
                res.render("users/login", {
                    errorMessage: "The username doesn't exist."
                })
                return;
            } else if (req.body.password === user.password){
                req.session.currentUser = user;
                res.redirect("/")
                console.log("Logged in succesfully");
            } else{
                res.render("users/login", {
                    errorMessage: "Incorrect password"
                })
            }
        })
        .catch(error=>{
            console.log('Error', error)
        })
})

module.exports = app;