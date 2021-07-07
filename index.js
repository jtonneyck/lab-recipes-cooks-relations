const express = require('express');
const app = express();
const path = require('path')
const hbs = require('hbs');
const mongoose = require('mongoose');
const session    = require("express-session");
const MongoStore = require("connect-mongo")(session);


const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
hbs.registerPartials(__dirname + '/views/partials');


const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x => {
    console.log(`Connected to the database: "${x.connections[0].name}"`);
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  })
  app.use(session({
    secret: "basic-auth-secret",
    cookie: { maxAge: 60000 },
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 24 * 60 * 60 // 1 day
    })
  }));

  function addSession(req, res, next){
    if (req.session.currentUser) { 
      res.locals.loggedIn = true;
      res.locals.user = req.session.currentUser
    }          
    next();   
  } 

  function protection(req, res, next){
    if(req.session.currentUser){
      next()
    }
    else{
      res.redirect('/login')
    }
  }
app.use(addSession)
app.use("/", require('./routes/recipe/recipes'))
app.use("/recipes", protection,require('./routes/recipe/details'))
app.use("/recipes", require('./routes/recipe/delete'))
app.use("/create",protection, require('./routes/recipe/create'))
app.use("/", require('./routes/reviews/review'))
app.use("/update", require('./routes/recipe/update'))
app.use("/chefs",protection, require('./routes/chef/chefList'))
app.use("/chefs",protection, require('./routes/chef/createChef'))
app.use("/", require('./routes/chef/updateChef'))
app.use("/", require('./routes/chef/deleteChef'))
app.use("/", require('./routes/user/signup'))
app.use("/", require('./routes/user/login'))
app.use("/", require('./routes/user/logout'))

app.listen(3001, () => console.log("App listening on port 3001"));
  