const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
        username:{
            type: String,
            required: true,
            unique: false
        },
        title:{
            type: String,
            required: true,
            unique: true
        },
        description: {
            type: String,
            required: true,
        },
        photo: {
            type: String,
            required: false
        },
        author: {
            type: String,
            required: false
        },
        categories: {
            type: Array,
            required: false
        }
    }, 
)

module.exports = mongoose.model("Post", PostSchema);