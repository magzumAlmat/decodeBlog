const express =require('express')
const router= express.Router()
const User=require('../auth/User')
const categories=require('../Categories/Category')
const Post=require('../Posts/Post')
router.get('/',async(req,res) =>{
    const AllCategories=await categories.find()
    // console.log('cat= ',AllCategories)
    const post= await Post.find().populate('category').populate('author')
    const user = req.user ? await User.findById(req.user._id) : {}
    console.log('user= ', user)
    // const allUsers = await User.find(req.user.id)
    
    // console.log('post= ',post)
    res.render("index",{user,posts:post,category:AllCategories,user:req.user?req.user:{}})
    
})



router.get('/addBlog',async (req,res) =>{
    const AllCategories=await categories.find()
    const user = await User.findById(req.params.id)
    res.render("addBlog",{category:AllCategories,user:req.user?req.user:{}})
})

router.get('/admin/:id', async (req,res) =>{
    // const allGanres=await ganres.find()
    const user = await User.findById(req.params.id)
    res.render("AdminProfile",{user:req.user ? req.user:{},loginUser:req.user })
})


router.get('/addpost',async(req,res) =>{
    const AllCategories=await categories.find()
    const user = await User.findById(req.params.id)
    const post= await Post.find().populate('category').populate('author')
    res.render("addBlog",{posts:post,category:AllCategories,user:req.user?req.user:{}})
})


router.get('/editpost/:id',async(req,res) =>{
    const AllCategories=await categories.find()
    const user = await User.findById(req.params.id)
    const post= await Post.findById(req.params.id)
    res.render("EditPost",{posts:post,category:AllCategories,user:req.user?req.user:{}})
})


router.get('/more/:id',async(req,res) =>{
    console.log('req.params.id= ',req.params.id)
    const AllCategories=await categories.find()

    
    const post= await Post.findById(req.params.id)
    res.render("more",{post:post,category:AllCategories})
})

router.post('/deletepost/:id', async(req, res) => {
    //     console.log('DELETE APP')
    //     const id = req.params.id;
    //     Film.findByIdAndDelete(id, (err) => {
    //       if (err) {
    //         console.log(err);
    //         res.send('Error deleting book');
    //       } else {
    //         res.redirect('/admin/'+req.user.id)
    //       }
    //     });
    //   });
    const user = await User.findById(req.params.id)
    const post= await Post.findById(req.params.id)
        res.render("DeletePost",{posts:post,user:req.user ? req.user:{}})
    })

router.get('/post',(req,res) =>{
    
    res.render("post")
})

router.get('/profile/:id',async(req,res) =>{
    const output=''
    const post= await Post.find().populate('category').populate('author')
    // if (post.author==req.params.id){
    //     output=post
    // }
    // console.log('reqparamsid= ',req.params.id)
    // console.log('post= ',post)
    
    // console.log('output= ',output)
    
    res.render("profile",{posts:post,user:req.user ? req.user:{}})
})

router.get('/register',(req,res) =>{
    res.render("signUp")
})

router.get('/signin',(req,res) =>{
    res.render("signIn")
})




module.exports=router