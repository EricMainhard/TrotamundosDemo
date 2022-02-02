import './posts.css';
import Post from '../Post/Post'
import React from 'react';

function Posts({posts}){
    return(
        <div className='posts container'>
            {posts.map((p,i) => {
                return <Post key={i} post={p}/>
            })}
        </div>
    )
}

export default Posts;