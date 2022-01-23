const router = require('express').Router();
const User = require('../models/User');
const Post = require('../models/Post');
const bcrypt = require('bcrypt');

//UPDATE

router.put("/:id", async (req,res)=>{
    if(req.body.userId === req.params.id){
        if(req.body.password){
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password,salt);
        }
        try{
            
            const updateUser = await User.findByIdAndUpdate(req.params.id,{ 
                $set:req.body
            },{new:true})
            res.status(200).json(updateUser);
            const user = await newUser.save();
            res.status(200).json(user);
        } catch(e){
            res.status(500).json(e);
        }
    } else {
        res.status(401).json("You can only update your account!")
    }
});

//DELETE

router.put("/:id", async (req,res)=>{
    if(req.body.userId === req.params.id){
        try{
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json('User has been deleted');
        } catch(e){
            res.status(500).json(e);
        }
    } else {
        res.status(401).json("You can only delete your account!")
    }
});

module.exports = router;