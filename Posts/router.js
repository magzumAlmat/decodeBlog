const express= require('express')
const router= express.Router()
const {upload}=require('./multer')
const {createPost}=require('./Controller')
const {editPost}=require('./Controller')
const {deletePost}=require('./Controller')

const {isAuth}=require('../auth/middlewares')
router.post('/api/addpost/',isAuth,upload.single('image'),createPost)
router.post('/api/editpost/',isAuth,upload.single('image'),editPost)
router.post('/api/deletepost/',isAuth,deletePost)


module.exports=router

