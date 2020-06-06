const express = require("express");
const app = express();
const User = require("../../models/user");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

const bcrypt = require("bcrypt");
const saltRounds = 10;

app.get("/user/signup", (req, res) => {
  res.render("user/signup");
});

app.post("/user/signup", (req, res) => {

    var userName = req.body.username;
    var password = req.body.password;

    if (userName === "" || password === "") {
        res.render("user/signup", {
          errorMessage: "Please enter both, username and password to signup."
        });
        return;
    }

    User
        .findOne({username:userName})
        .then(user=>{
            if(user){
                res.render("user/signup", {
                    errorMessage: "User name already exists, please choose another one."
                })
            }
            else{
                bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
                    // Store hash in your password DB.
                    if(!err){
                
                        User
                            .create({
                                username: userName,
                                password:hash
                            })
                            .then((savedUser)=>{
                                console.log("User created successfully", savedUser);
                                res.redirect("user/login");
                            })
                            .catch(err=>{
                                console.log(err);
                            })
                        }
                    else{
                            console.log('error occurred while creating hash');
                        }   
                });
            }
        })
});

module.exports = app;
