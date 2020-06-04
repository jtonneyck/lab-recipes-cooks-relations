const express = require('express');
const app = express();
const Cook = require("../../models/cook.js")

app.get('/cooks/create', (req, res, next) => {
    res.render('cooks/create');
});

app.post('/cooks/create', (req, res, next) => {
    const newCook = req.body;
    
    Cook.create(newCook)
        .then(cook => {
            res.redirect(`/cooks`);
        })
        .catch(error => {
            console.log("Error adding the cook", error);
        })
});

module.exports = app;