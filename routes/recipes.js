const mongoose = require('mongoose')
const express = require('express')
const app = express()

const Recipe = require('../models/recipe')
const Cook = require('../models/cook')

app.get('/', (req, res)=>{
    Recipe.find()
        .populate('creator')
        .then(recipes =>{
            res.render('./recipe/recipes', {recipeHbs:recipes})
        })
        .catch(err=>console.log(err))
})

app.get('/create', (req,res)=>{
    Cook.find()
    .then(cooks=>{
        res.render('./recipe/create', {cookHbs:cooks})
    })
    .catch(err=>console.log(err))
})

app.post('/create', (req,res)=>{
    Recipe.create({
        title: req.body.title,
        creator: req.body.creator,
        level: req.body.level,
        cuisine: req.body.cuisine,
        duration: req.body.duration
    })
    .then(()=>{
        res.redirect('/')
    })
    .catch(err=>console.log(err))
})




module.exports = app