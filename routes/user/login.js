const express = require('express');
const  app = express();
const User = require('../../models/User');
const bcrypt = require('bcrypt');

app.post("/login", (req, res, next)=>{
    const username = req.body.username;
    const password = req.body.password;


    if (username === "" || password === "") {
        res.render("./user/login", {
          errorMessage: "Please enter both, username and password to sign up."
        });
        return;
      }

    User.findOne({"username": username})
    .then(user =>{
        if (!user) {
            res.render("./user/login", {
              errorMessage: "The username doesn't exist."
            });
            return;
          }
          if(bcrypt.compareSync(password, user.password)){
            req.session.currentUser = user;
            res.redirect("/");  
          }else{
            res.render("./user/login", {
            errorMessage: "Incorrect password"
            });
          }
    })
    .catch(error => {
        next(error);
    })
})


app.get("/login", (req,res)=>{
    res.render('./user/login')
  })

module.exports = app;