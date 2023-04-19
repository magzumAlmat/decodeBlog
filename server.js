
const express=require('express')
const app=express();

require('./config/db')

app.use(express.static(__dirname+'/public'))

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

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
    res.render("signUp")
})

app.get('/signIn',(req,res) =>{
    res.render("signIn")
})



app.use(require('./auth/router'))

const PORT=8000


app.listen(PORT, () =>{
    console.log(`This is port11 ${PORT}`);
})