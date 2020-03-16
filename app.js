const express = require("express");
const app = express();
const mongoose = require("mongoose");
const hbs = require(`hbs`);

hbs.registerPartials(__dirname + "/views/partials");
app.use(express.static("public")) 

mongoose
  .connect("mongodb://localhost/Recipes", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(connectionInfo => {
    console.log("connected to database");
  })
  .catch(error => {
    console.log("ERROR", error);
  });

app.set("PORT", 3000);
app.set("view engine", "hbs");

app.use("/", require("./routes/home.js"));
app.use("/recipes", require("./routes/recipes.js"));
app.use("/cooks", require("./routes/cooks.js"));


app.listen(app.get("PORT"), () => {
  console.log("listening to port", app.get("PORT"));
});
