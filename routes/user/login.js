const express = require("express");
const app = express();
const User = require("../../models/user");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
const session    = require("express-session");

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
  }))

  const bcrypt = require("bcrypt");

app.get("/user/login", (req, res) => {
  res.render("user/login");
});

app.post("/user/login", (req, res) => {


    if (req.body.username === "" || req.body.password === "") {
        res.render("user/login", {
          errorMessage: "Please enter both, username and password to log in."
        });
        return;
    }
    
    User
        .findOne({username:req.body.username})
        .then(foundUser=>{

            if(!foundUser){
                res.render("user/login", {
                    errorMessage: "The username doesn't exist."
                });

                return;
            }

            bcrypt.compare(req.body.password, foundUser.password, function(err, isMatch) {
                if(err){
                    console.log('error occurred', err);
                }
                else if(isMatch){
                    req.session.currentUser = foundUser;
                    res.redirect("/recipes/recipes");
                }
                else{
                    res.render("user/login", {
                        errorMessage:"Incorrect password"
                    })
                }
            });
        })
        .catch(err=>{
            console.log(err);
        })
});

module.exports = app;