const express = require('express');
const  app = express();
const Cook = require('../../models/Cook');

app.get("/updateChef/:cookId", (req,res)=>{
    Cook
      .findById(req.params.cookId)
      .then(cook =>{
        res.render('./chefs/update', {cook})
      })
      .catch(error => {
        console.error('Cannot render the cook', error);
      })
  })

  app.post('/updateChef/add', (req, res)=> {
        debugger
        const cookId = req.body._id;
        Cook.findByIdAndUpdate(cookId ,{
            name: req.body.name,
            image: req.body.image,
        }, false)
        
        .then((cook) => {
            res.redirect('/');
        })
        .catch((error) => {
            console.log(error);
        })
});
  module.exports = app