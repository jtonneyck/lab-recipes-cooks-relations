const express = require("express");
const app = express();
const Cook = require('../models/cook')

// List all
app.get("/", (req,res)=> {
    Cook
    .find()
        .then((cooksData)=> {
            res.render("cooks/list", {cooks:cooksData});
        })
        .catch((err)=> {
            res.send(err);
        })
})

// Show one
app.get("/detail/:id", (req,res)=> {
    Cook
    .findById(req.params.id)
        .then((cookData)=> {
            res.render("cooks/detail", {cook:cookData});
        })
        .catch((err)=> {
            res.send(err);
        })
})

// Delete
app.get("/delete/:id", (req,res)=> {
    Cook
        .findByIdAndDelete(req.params.id)
        .then((cook)=> {
            console.log("deleted: ",cook)
            res.redirect("/cooks");   
        })
        .catch((err)=> {
            res.send(err);
        })
})

// Create one
app.get("/add-cook", (req,res)=>{
    res.render("cook/create")
})

app.post("/create", (req,res)=> {
    console.log(req.body);
    Cook
        .create({
            name:req.body.name,
            image:req.body.imageUrl
        })
        .then((cookData)=> {
            console.log("added: ",cookData)
            res.redirect(`/cooks/detail/${cookData._id}`);
        })
        .catch((err)=> {
            res.send(err);
        })
})

// Uopdate
app.get("/update/:id", (req,res)=> {
    Cook
        .findById(req.params.id)
        .then((cookData)=> {
            res.render("cook/update", {cook:cookData});
        })
        .catch((err)=> {
            res.send(err);
        })
})

app.post("/update/:id", (req,res)=> {
    Cook
        .findByIdAndUpdate(req.params.id,{
            name:req.body.name,
            image:req.body.imageUrl
        })
        .then((cookData)=> {
            res.redirect(`/cooks/detail/${cookData._id}`);
        })
        .catch((err)=> {
            res.send(err);
        })
})
