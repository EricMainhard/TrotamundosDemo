import React, {useState,useEffect} from 'react';
import './postsPage.css';
import Posts from '../../Components/Posts/Posts.jsx';
import axios from 'axios';

function PostsPage(){

  const [posts,setPosts] = useState([]);

  useEffect(()=>{
      const fetchPosts = async ()=>{
          let res = await axios.get("/posts")
          setPosts(res.data);
      }
      fetchPosts();
  },[])
  return(
      <section className='allPosts container'>
          <h1 className='allPostsTitle'>All Posts</h1>
          <Posts posts={posts}/>
      </section>
  )
}
export default PostsPage; 

