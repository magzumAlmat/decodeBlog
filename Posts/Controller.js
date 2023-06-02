const Post=require('./Post')
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;    

const fs=require('fs')
const path=require('path')

const createPost=async(req,res) => {


    // console.log('req.file = ',req.file)
    // console.log('req.body ',req.body.category,typeof(req.body.category))
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
        // console.log(' if idet po vetke true ', req.file)
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


const editPost=async(req,res)=>{
    // console.log('IM in edit film req body= ',req.body)
    if (
        // req.file.length > 2 &&
        req.body.title.length>2 
        // req.body.category.length>2 && 
        // req.body.titleDescription.length>0 && 
        // req.body.posttext.length>0 
        )
    {
            // console.log('req.file = ',req.file)
            // console.log('req.user._id= ',req.user._id)
            // console.log('req.body=== ',req.body)
       

            const posts= await Post.findById(req.body.id)
            if (req.file.filename){
                if (fs.existsSync(fs.unlinkSync(path.join(__dirname+'../../public'+posts.image)))){
                    fs.unlinkSync(path.join(__dirname+'../../public'+posts.image))
                }
                posts.image=`/images/posts/${req.file.filename}`
            }
            
            // console.log('PATH= ',__dirname+'../../../public'+films.image)
         
            posts.title=req.body.title,
            posts.category=req.body.category,
            posts.titleDescription=req.body.titleDescription,
            posts.posttext=req.body.posttext,
            
            posts.author=req.user._id,
            posts.save()
            res.redirect(`/profile/${req.user._id}`)
    
           
        }

    else{
        res.redirect(`/editfilm/${req.body.id}?error=1`)

    }
}


const deletePost=async(req,res)=>{
    console.log('DELETE FILM11111')
    const { id } = req.body;

  try {
    await Post.findByIdAndDelete(id);   
    res.redirect(`/profile/${req.user._id}`)
  } catch (error) {
    res.status(400).json({ error });
  }
}

const showMore=async(req,res)=>{
    console.log('im in showMore Func- ',req._id)
    res.redirect(`/more/${req.user._id}`)
}


module.exports={createPost,editPost,deletePost,showMore}