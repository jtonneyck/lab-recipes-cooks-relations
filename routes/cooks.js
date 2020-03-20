const express = require('express')
const app = express()
var multer  = require('multer')
var upload = multer({ dest: 'public/' })

const Cook = require('../models/cook')

app.get('/cooks', (req,res)=>{
    Cook.find()
    .then(cooks=>{
        res.render('./cooks', {cookHbs:cooks})
    })
    .catch(err=>console.log(err))
})

app.post('/cooks/create', upload.single('cook-image'), (req, res)=>{
    Cook.create({
        name:req.body.name,
        image:req.body.image,
        imagefile:req.file.filename
    })
    .then(()=>{
        console.log('cook created')
        res.redirect('/cooks')
    })
    .catch(err=>console.log(err))
})

module.exports = app