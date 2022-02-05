const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

//REGISTER

router.post("/register", async (req,res)=>{
    try{
        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(req.body.password,salt);
        const newUser = new User({ 
            username: req.body.username,
            email: req.body.email,
            password: hashPass
        })
        const repeatedUsername = await User.findOne({username:req.body.username});
        if (repeatedUsername){
            res.status(400).json("Username already exists")
        } else {
            const user = await newUser.save();
            res.status(200).json(user);
        };
    } catch(e){
        res.status(500).json(e);
    }
});

// LOGIN

router.post("/login", async (req,res)=>{
    try{
        const user = User.findOne({username:req.body.username})
        !user && res.status(400).json("User doesn't exist")

        const validate = await bcrypt.compare(req.body.password, user.password)
        !validate && res.status(400).json("Wrong password")

        const {password,...others} = user._doc;
        res.status(200).json(others)
    } catch (e){
        res.status(500).json(err);
    }
})

module.exports = router;