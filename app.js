const express = require ('express')
const app = express();
const hbs = require('hbs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

 const Cook = require("./models/cook");
const Recipe = require("./models/recipe");


 app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: true }))

const MONGODB_URI = 'mongodb://localhost:27017/recipes-app';
mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
 
  .then(self => {
    console.log(`Connected to the database: "${self.connection.name}"`);
    // Before adding any documents to the database, let's delete all previous entries
   // return self.connection.dropDatabase();
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  })

 



app.use('/', require("./routes/recipelist"));
app.use('/', require("./routes/recipedelete"));
app.use('/', require("./routes/recipeinfo"));
app.use('/', require("./routes/recipecreate"));
app.use('/', require("./routes/recipeupdate"));

app.use('/', require("./routes/cooklist"));
app.use('/', require("./routes/cookdelete"));
app.use('/', require("./routes/cookcreate"));








  app.listen(3020, () => {
    console.log("connected");
})