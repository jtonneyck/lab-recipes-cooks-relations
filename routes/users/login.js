const express = require("express");
const app = express();
const User = require("../../models/User");
const bcrypt = require('bcrypt');

app.post("/login", (req, res) => {
  User.findOne({
    username: req.body.username
  })
  .then((user)=> {
    if (!user) {
      res.redirect("/login")
    } else {
      bcrypt.compare(req.body.password, user.password, function(err, match){
        if(err){
          console.log("Error", err);
        } else if(match){
          req.session.user = user;
          res.redirect("/")
        }
      })
    }
  })
  .catch((err)=> {
  console.log(err);
  })
})

app.get("/login", (req,res) => {
  res.render("users/login")
})

module.exports = app;