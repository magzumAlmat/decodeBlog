const express=require('express')
const router= express.Router()
const passport = require('passport')
const {signUp,signIn,signOut}=require('./Controller')



router.post("/api/signup/",signUp)
router.post("/api/signin/",passport.authenticate('local',{failureRedirect:'/login?error=1'}),signIn)
router.get( "/api/signout/", signOut)

// router.post("/api/addpost/",addpost)

module.exports = router