const express = require("express");
const app = express();
const User = require("../../models/User");
const bcrypt = require('bcrypt');



app.post("/signup", (req, res) => {
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
})

app.get("/signup", (req,res) => {
  res.render("users/signup")
})

module.exports = app;