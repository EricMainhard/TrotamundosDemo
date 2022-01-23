import React from "react";
import './post.css';

function Post(){
    return(
        <div className="post">
            <img src="/img/post.jpg" alt="" />
            <div className="postInfo">
                <div className="postAuthor">
                    <i className=" postAuthorIcon fas fa-user-circle"></i>
                    <span>Administrador</span>
                </div>
                <div className="postDate">
                    <span>15 de Julio de 2021 - 1 min</span>
                </div>
            </div>
            <a className="postContent">
                <h3>Lorem ipsum dolor sit amet.</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, consequatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, consequatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, consequatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, consequatur?</p>
            </a>
        </div>
    )
}

export default Post;