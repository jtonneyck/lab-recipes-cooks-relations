const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
hbs.registerPartials(__dirname + '/views/partials');

const mongoose = require("mongoose");
const MONGODB_URI = "mongodb://localhost:27017/recipes-cooks-relations";

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const session = require('express-session');

const cookieParser = require("cookie-parser");
app.use(cookieParser());


app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}))

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
app.set("partials", path.join(__dirname, "/views/partials"));

app.use(express.static("public"))

// function protectMiddleWare(req, res, next) {
//   console.log("Middleware here!");
//   if(req.session.user) next();
//   else res.redirect("/users/login")
//   // next();
// }

// // app.use(protectMiddleWare)

// add protectionMiddleWare to recipe-details, delete this chef and add cook 
app.use("/", require("./routes/recipes/list"));
app.use("/",  require("./routes/recipes/recipe-details"));
app.use("/", require("./routes/recipes/delete"));
app.use("/", require("./routes/recipes/create"));
app.use("/", require("./routes/recipes/update"));

app.use("/", require("./routes/cooks/list"));
app.use("/", require("./routes/cooks/create"));

app.use("/", require("./routes/users/signup"));
app.use("/", require("./routes/users/login"));

mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(self => {
    console.log(`Connected to the database: "${self.connection.name}"`);
  })

app.listen(3000, () => {
  console.log("Listening on port 3000")
})