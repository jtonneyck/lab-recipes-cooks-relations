const express = require('express');
const app = express();
const Cook = require("../../models/cook.js");

app.get('/cooks/delete/', (req, res, next) => {
    let cooksId = req.query.id;

    Cook.findByIdAndDelete(cooksId)
        .then(() => {
            res.redirect('/cooks')
        })
        .catch((error) => {
            console.log("Error with deleting Cook", error)
        })

})

module.exports = app;
