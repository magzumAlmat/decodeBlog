const mongoose=require('mongoose')
const UserSchema=new mongoose.Schema({
    email:String,
    full_name:String,
    gooleId:String,
    githubId:String,
    password:String,
})


module.exports = User = mongoose.model("Users", UserSchema);
