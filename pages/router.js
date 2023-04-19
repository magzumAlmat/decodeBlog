const express =require('express')

const router= express.Router()


router.get('/',async(req,res) =>{
    
    res.render("index")
})


router.get('/addBlog',(req,res) =>{
    res.render("addBlog")
})


router.get('/post',(req,res) =>{
    res.render("post")
})


router.get('/profile',(req,res) =>{
    res.render("profile")
})

router.get('/register',(req,res) =>{
    res.render("signUp")
})

router.get('/signin',(req,res) =>{
    res.render("signIn")
})







module.exports=router