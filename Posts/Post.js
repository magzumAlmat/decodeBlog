const mongoose=require('mongoose')
const Schema=mongoose.Schema

const PostSchema=new mongoose.Schema({
    title:String,
    category:{type:String,ref: "categories"},
    key:Number,
    titleDescription:String,
    image:String,
    author:String,
    posttext:String,
})


module.exports = mongoose.model('post',PostSchema)