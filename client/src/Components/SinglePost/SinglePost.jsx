import './singlepost.css';
import React from 'react';

function SinglePost(){
    return(
        <div className='singlePost container'>
            <div className="singlePostWrapper">
                <div className="singlePostInfo">

                </div>
                <div className="singlePostContent">
                    <h3>Los tratamientos que debes probar en un Spa</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ab? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ab?</p>
                    <img src="/img/post.jpg" alt="" />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum unde beatae excepturi! Accusantium architecto minus enim pariatur laboriosam ratione repellendus.</p>
                </div>
                <hr/>
                <div className="singlePostFooter">
                    <div className="singlePostFooter_icons">
                    <i className="fab fa-facebook-square postIcon" ></i>
                    <i className="fab fa-instagram postIcon" ></i>
                    <i className="fab fa-pinterest postIcon" ></i>
                    <i className="fab fa-twitter postIcon" ></i>
                    </div>
                    <div className="singlePostFooter_cat">
                        <span>Relax</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SinglePost;