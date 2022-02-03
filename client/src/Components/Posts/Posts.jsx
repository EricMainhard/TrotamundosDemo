import './posts.css';
import Post from '../Post/Post'
import React from 'react';

function Posts({posts}){
    return(
        <div className='posts container'>
            {posts.map((p) => {
                return <Post key={p._id} post={p}/>
            })}
        </div>
    )
}

export default Posts;