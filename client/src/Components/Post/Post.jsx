import React from "react";
import './post.css';

function Post({post}){
    return(
        <div className="post">
            <img src="/img/post.jpg" alt="" />
            <div className="postInfo">
                <div className="postAuthor">
                    <i className=" postAuthorIcon fas fa-user-circle"></i>
                    <span>{post.author}</span>
                </div>
                <div className="postDate">
                    <span>15 de Julio de 2021 - 1 min</span>
                </div>
            </div>
            <a className="postContent">
                <h3>{post.title}</h3>
                <p>{post.description}</p>
            </a>
        </div>
    )
}

export default Post;