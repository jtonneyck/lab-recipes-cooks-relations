const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))

const hbs = require('hbs')
hbs.registerPartials(__dirname + '/views/partials')

app.set('view engine', 'hbs')

mongoose.connect("mongodb://localhost/recipe-relations", { 
        useNewUrlParser: true,  
        useUnifiedTopology: true 
    })
    .then((connection)=> {
        console.log("connected to mongodb")
    })
    .catch(err=> {
        console.log("not connected to mongodb:", err);
    })


app.use('/', require('./routes/recipes'))
app.use('/', require('./routes/cooks'))

app.listen(3000, ()=>{
    console.log('listening on', 3000)
})
