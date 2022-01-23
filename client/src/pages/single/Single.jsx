import './single.css';
import React from 'react';
import SinglePost from '../../Components/SinglePost/SinglePost';
import PostsFilter from '../../Components/PostsFilter/PostsFilter.jsx'

function Single(){
    return(
        <>
            <PostsFilter/>
            <SinglePost/>
        </>
    )
}

export default Single;