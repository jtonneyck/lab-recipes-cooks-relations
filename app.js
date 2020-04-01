//general info
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

mongoose
  .connect('mongodb://localhost/recipe-app-dev', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(connectionInfo => {
    console.log('connected to recipes database');
  })
  .catch(error => {
    console.log('error', error);
  });

app.set('PORT', 3013);
app.set('view engine', 'hbs');

app.use(express.static('public'));
app.use('/', require('./routes/recipes'));
//app.set('views', path.join(__dirname, 'views'));

app.listen(app.get('PORT'), () => {
  console.log('🏃‍ on port 3013', app.get('PORT'));
});
