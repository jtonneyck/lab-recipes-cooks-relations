const express = require('express');
const  app = express();
const Cook = require('../../models/Cook');

app.get('/list',(req, res) =>{
    debugger
    Cook
      .find({})
      .then(allCooks => {  
        res.render('./chefs/list', {allCooks})
      })
      .catch(error => {
        console.error('Cannot render cooks', error);
      })
})

module.exports = app