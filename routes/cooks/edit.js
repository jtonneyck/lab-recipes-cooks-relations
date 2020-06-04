const express = require('express');
const app = express();
const Cook = require('../../models/cook.js')

app.get('/cooks/edit', (req, res, next) => {
    const cookId = req.query.id

    Cook.findOne({ _id: cookId })
        .then(cook => {
            res.render('cooks/edit', { cook })
        })
        .catch(error => {
            console.log("Error filling form", error)
        })
});

app.post('/cooks/edit', (req, res, next)=> {
    const cookId = req.body.id

    Cook.findOneAndUpdate({ _id: cookId }, {
    $set: {
        name: req.body.name,
        image: req.body.image
    }
})
    .then(() => {
        res.redirect(`/cooks`);
    })
    .catch((error) => {
        console.log(error);
    })
});


module.exports = app;