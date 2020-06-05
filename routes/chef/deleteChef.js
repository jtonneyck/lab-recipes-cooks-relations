const express = require('express');
const  app = express();
const Cook = require('../../models/Cook');

app.get('/deleteChef/:cookId', (req, res) => {
    Cook.remove({_id:req.params.cookId})
    .then((deletedCook)=> {
      res.redirect('/')
    })
    .catch(error => {
      console.error('Cannot delete the cook', error);
    })
  })

module.exports = app