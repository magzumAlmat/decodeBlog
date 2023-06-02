const mongoose=require('mongoose')
const Schema=mongoose.Schema

const PostSchema=new mongoose.Schema({
    title:String,
    category:{type:Schema.Types.ObjectId,ref:  "categories"},
    key:Number,
    titleDescription:String,
    image:String,
    author:{type:Schema.Types.ObjectId,ref: "Users"},
    posttext:String,
    date:{default:Date.now,type:Date}
})

module.exports = mongoose.model('post',PostSchema)