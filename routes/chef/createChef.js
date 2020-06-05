const express = require('express');
const  app = express();
const Cook = require('../../models/Cook');

app.post('/createChef/add', (req, res)=> {
    const newCook = req.body;
    Cook.create(newCook)
    .then((cook) => {
        res.redirect('/');
    })
    .catch((error) => {
        console.log(error);
    })
})

app.get('/chefs/create', (req, res) => {
    res.render('./chefs/create')
    });

module.exports = app