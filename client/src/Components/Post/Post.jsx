import React from "react";
import './post.css';
import {Link} from 'react-router-dom';

function Post({post}){
    return(
        <div className="post">
            {post.photo && <img src={post.photo} className="postImage" alt="" />}
            <div className="postInfo">
                <div className="postAuthor">
                    <Link to={`/?author=${post.author}`}>
                        <i className=" postAuthorIcon fas fa-user-circle"></i>
                        <span>{post.author}</span>
                    </Link>
                </div>
                <div className="postDate">
                    <span>{new Date(post.createdAt).toDateString()}</span>
                </div>
            </div>
            <Link className='link postLink' to={`/post/${post._id}`}>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
            </Link>
        </div>
    )
}

export default Post;