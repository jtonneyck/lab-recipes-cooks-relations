const express = require('express')
const app = express()

const Cook = require('../models/cook')

app.get('/cooks', (req,res)=>{
    Cook.find()
    .then(cooks=>{
        res.render('./cooks', {cookHbs:cooks})
    })
    .catch(err=>console.log(err))
})

app.post('/cooks/create', (req, res)=>{
    console.log(req.body)
    Cook.create({
        name:req.body.name,
        image:req.body.image
    })
    .then(()=>{
        console.log('cook created')
        res.redirect('/cooks')
    })
    .catch(err=>console.log(err))
})

module.exports = app