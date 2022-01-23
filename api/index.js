const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
.then(console.log('Connected to mongo'))
.catch((e)=>{console.log(e)});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen("3001",()=>{
    console.log('Listen to port 3001');
})