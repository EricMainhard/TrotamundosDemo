const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const multer = require('multer');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const categoriesRoute = require('./routes/categories');

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
.then(console.log('Connected to mongo'))
.catch((e)=>{console.log(e)});

const storage = multer.diskStorage({
    destination: (req,res,cb) => {
        cb(null,"images");
    },
    filename: (req,res,cb) => {
        cb(null, req.body.name);
    }
})

const upload = multer({storage});

app.post("/api/uploads", upload.single('file'),(req,res)=>{
    res.status(200).json('File uploaded!')
})

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoriesRoute);

app.listen("3001",()=>{
    console.log('Listen to port 3001');
})