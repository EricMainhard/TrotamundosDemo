import './singlepost.css';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function SinglePost(){

    const [post,setPost] = useState([]);

    const location = useLocation();
    const path = location.pathname.split('/')[2];

    useEffect(()=>{
        const getPost = async()=>{
            let res = await axios.get(`/posts/${path}`);
            setPost(res.data);
        }
        getPost();
    },[path])

    return(
        <div className='singlePost container'>
            <div className="singlePostWrapper">
                <div className="singlePostInfo">

                </div>
                <div className="singlePostContent">
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                    {post.photo && <img src={post.photo} alt="" />}
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
                        {post.categories && post.categories.map(cat => {
                            <span>{cat}</span>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SinglePost;