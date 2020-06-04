// require express, mongoose and the app
const express = require('express');
const app = express();
const mongoose = require('mongoose');

// express session packages
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

// express session middleware
app.use(session({
    secret: "basic-auth-secret",
    cookie: { maxAge: 300000 },
    store: new MongoStore({
        mongooseConnection: mongoose.connection,
        ttl: 24 * 60 * 60 // 1 day
    }),
    resave: true,
    saveUninitialized: true
}));

// bodyparser for the input
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

// set views as pages folder
app.set('views', __dirname + '/views');

// set handlebars
app.set('view engine', 'hbs');
const hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials');

// set public as styling folder
app.use(express.static('public'))

// make connection to the database
mongoose
    .connect('mongodb://localhost/recipe-app', { useNewUrlParser: true, useUnifiedTopology:true })
    .then(data => {
        console.log(`Connected to Mongo! Database name: "${data.connections[0].name}"`)
    }) 
    .catch(error => console.error('Error connecting to mongo', error));

const makeSessionGlobal = (req, res, next) => {
    if (req.session.user) {
        res.locals.loggedIn = true;
        res.locals.user = req.session.user;
    } 
    next();
}
    
const onlyLoginUsers = (req, res, next) => {
    if (req.session.currentUser) {
        next();
    } else {
        res.redirect("/login");
    }
}


// all the middleware

// app.use(makeSessionGlobal);
app.use('/', require("./routes/home"));
app.use('/', require("./routes/recipes/recipes"));
app.use('/', require("./routes/recipes/details"));
app.use('/', require("./routes/recipes/delete"));
app.use('/', require("./routes/recipes/create"));
app.use('/', require("./routes/recipes/edit"));
app.use('/', require("./routes/recipes/search"));
app.use('/', require("./routes/cooks/cooks"));
app.use('/', require("./routes/cooks/create"));
app.use('/', require("./routes/cooks/delete"));
app.use('/', require("./routes/cooks/edit"));
app.use('/', require("./routes/users/signup"));
app.use('/', require("./routes/users/login"));
app.use('/', require("./routes/users/logout"));

// All pages that need a login
app.use('/', onlyLoginUsers, require("./routes/recipes/privaterecipe"));

app.listen(3000, () => {
    console.log('3000, up and running!');
});