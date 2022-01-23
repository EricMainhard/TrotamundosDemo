import './posts.css';
import Post from '../Post/Post'
import React from 'react';

function Posts(){
    return(
        <div className='posts container'>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}

export default Posts;