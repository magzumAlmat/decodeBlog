const express= require('express')
const router= express.Router()
const {upload}=require('./multer')
const {createPost}=require('./Controller')
const {isAuth}=require('../auth/middlewares')
router.post('/api/addpost/',isAuth,upload.single('image'),createPost)


module.exports=router

