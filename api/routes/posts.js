const router = require('express').Router();
const User = require('../models/User');
const Post = require('../models/Post');

//CREATE POST

router.post("/", async (req,res) => {
    const newPost = new Post(req.body);
    try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch(e){

    }
});

//UPDATE POST

router.put("/:id", async (req,res) => {
    try{
        const post = await Post.findById(req.params.id);
        try {
            if (post.username === req.body.username){
                try{
                    const updatedPost = await Post.findByIdAndUpdate(req.params.id,
                    {
                        $set: req.body
                    },
                    {
                        new: true
                    });
                    res.status(200).json(updatedPost);
                } catch(e){
                    res.status(500).json(e);
                }
            } else {
                res.status(401).json('Posts can only be updated by authors');
            }
        } catch(e){

        }
    } catch(e){
        res.status(500).json(e)
    }
});
//DELETE POST

router.delete("/:id", async (req,res) => {
    try{
        const post = await Post.findById(req.params.id);
        try {
            if (post.username === req.body.username){
                try{
                    await Post.findByIdAndDelete(req.params.id);
                    res.status(200).json('Post has been succesfully deleted!');
                } catch(e){
                    res.status(500).json(e);
                }
            } else {
                res.status(401).json('Posts can only be deleted by authors');
            }
        } catch(e){

        }
    } catch(e){
        res.status(500).json(e)
    }
});

//GET POST

router.get("/:id", async (req,res)=>{
        try{
            const post = await Post.findById(req.params.id)
            res.status(200).json(post);
        } catch(e){
            res.status(404).json(e);
        }
});

// GET ALL POSTS

router.get("/", async (req,res) => {
    const author = req.query.author;
    const cat = req.query.cat;
    try {
        let posts;
        if (author){
            posts = await Post.find({author});
        } else if (cat){
            posts = await Post.find({categories:{
                $in:[cat]
            }});
        } else {
            posts = Post.find();
        }
        res.status(200).json(posts);
    }
    catch(e){
        res.status(500).json(e);
    }
});

module.exports = router;