const express = require('express');
const app = express();
const Cook = require("../../models/cook.js")

app.get('/cooks', (req, res, next) => {
    Cook.find({})
        .then((cooks)=>{
            res.render('cooks/cooks', {cooks: cooks})
        })
        .catch((error)=>{
            console.log('Error display cook', error)
        })
})

module.exports = app;