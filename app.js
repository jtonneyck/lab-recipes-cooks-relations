const express = require("express");
const mongoose = require('mongoose');
const app     = express();
const hbs     = require('hbs');
const path = require('path');


// set up handlebars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

//register partials
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(path.join(__dirname, 'public')));

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/recipe');

const MONGODB_URI = 'mongodb://localhost:27017/recipes-cooks-app';

mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err=>{
    console.log(error);
  })


//signup
app.use("/", require("./routes/user/login"));


function protect (req,res,next){
    if(req.session.currentUser){
      next()
    }
    else{
      res.redirect("/user/login");
    }
}

function addSessionToHbs(){
    res.locals.user = req.session.currentUser;
    res.loggedIn = true;
    next();
}

//signup
app.use("/", require("./routes/user/signup"));

app.use("/", require("./routes/user/logout"));

app.get("/", (req,res)=>{
  res.render("home");
});

//list all recipes
app.use("/recipes", protect, require("./routes/recipes/recipes"));

//recipe detail
app.use("/recipes", require("./routes/recipes/detail"));

//delete a recipe
app.use("/recipes", require("./routes/recipes/delete"));

//creates a recipe
app.use("/recipes", require("./routes/recipes/create"));

//update a recipe
app.use("/recipes",require("./routes/recipes/update"));

//add new cook
app.use("/", protect, require("./routes/cooks/create"));

//update cook info
app.use("/", protect, require("./routes/cooks/update"));

//delete cook 
app.use("/",protect, require("./routes/cooks/delete"));

//show all cooks
app.use("/", protect, require("./routes/cooks/allCooks"));

//cook detail page
app.use("/", protect, require("./routes/cooks/detail"));

//recipes review  page
app.use("/", protect, require("./routes/recipes/review"))

app.listen(3000, ()=> {
    console.log("Webserver is listening");
})