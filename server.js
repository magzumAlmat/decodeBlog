const { request } = require('express');
const express=require('express')
const app=express();

app.use(express.static(__dirname+'/public'))

app.set("view engine","ejs")

app.get('/',(req,res) =>{
    res.render("index")
})

app.get('/addBlog',(req,res) =>{
    res.render("addBlog")
})


app.get('/post',(req,res) =>{
    res.render("post")
})


app.get('/profile',(req,res) =>{
    res.render("profile")
})

app.get('/register',(req,res) =>{
    res.render("register")
})

app.get('/signIn',(req,res) =>{
    res.render("signIn")
})

app.get('/signUp',(req,res) =>{
    res.render("signUp")
})
const PORT=8000


app.listen(PORT, () =>{
    console.log(`This is port11 ${PORT}`);
})