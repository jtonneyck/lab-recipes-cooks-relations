const express = require("express");
const app = express();



app.get('/user/logout', (req,res)=>{
    debugger
    req.session.destroy((err)=>{
        res.redirect("/user/login");
    })
})


module.exports = app;