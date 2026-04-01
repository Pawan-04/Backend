const express = require('express')

const app = express();

app.get('/home',(req,res)=>{
    res.send("Welcome to Home")
})

app.get('/about',(req,res)=>{
    res.send("Welcome to About")
})

app.listen(5000,()=>{
    console.log("Express server is running")
})