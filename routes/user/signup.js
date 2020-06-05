const express = require('express');
const  app = express();
const bcrypt = require('bcrypt');
const bcryptSalt = 10;
const User = require('../../models/User');

app.post('/signup', (req, res, next)=>{
    const username = req.body.username;
    const password = req.body.password;
    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt)

    if (username === "" || password === "") {
        return;
      }

    User.create({
        username : username,
        password: hashPass
    })
    .then(() =>{
        res.redirect('/')
    })
    .catch(error => {
        console.log(error);
    })
})

app.get('/signup', (req, res) => {
    res.render('./user/signup')
});
module.exports = app