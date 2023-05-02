const Post=require('./Post')
const createPost=async(req,res) => {
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;    

    // console.log('req.file = ',req.file)
    console.log('req.body ',req.body.category,typeof(req.body.category))
    // console.log('req.body=== ',req.body)
    // console.log('req.body=== ',req.body.titleRus)
    // console.log('req.body=== ',req.body.titleEng)
    // console.log('req.body=== ',req.body.year)
    // console.log('req.body=== ',req.body.time)
    // console.log('req.body=== ',req.body.country)
    // console.log('req.body=== ',req.body.ganre)
    // console.log('req user_id',req.user._id)
    
    if (
        // req.file.length > 2 &&
        req.body.title.length>2 && 
        req.body.category.length>2 && 
        req.body.titleDescription.length>0 && 
        req.body.posttext.length>0 )
    {
        console.log(' if idet po vetke true ', req.file)
        await new Post({
            title:req.body.title,
            category:req.body.category,
            titleDescription:req.body.titleDescription,
            posttext:req.body.posttext,
            image:`/images/posts/${req.file.filename}`,
            author:req.user._id,
            
            // image:`${req.file.destination}/${req.file.filename}`,
        }).save()

        res.redirect(`/profile/${req.user._id}`)
    }else
    {
        res.redirect('/new&error=1')
    }
    console.log('req.body.film = ',req.body)
}
module.exports={createPost}