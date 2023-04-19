const express=require('express')
const router= express.Router()

const {signUp}=require('./Controller')
router.post("/api/signup",signUp)
module.exports=router