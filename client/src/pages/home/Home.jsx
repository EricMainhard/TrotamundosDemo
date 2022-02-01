import React, { useEffect, useState } from 'react';
import './home.css';
import HomeBanner from '../../Components/HomeBanner/HomeBanner';
import CardsGrid from '../../Components/CardsGrid/CardsGrid';
import Posts from '../../Components/Posts/Posts';
import axios from 'axios';

function Home(){

    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        const fetchPosts = async ()=>{
            let res = await axios.get("/posts")
            setPosts(res.data);
        }
        fetchPosts();
    },[])
    return(
        <>
            <div className="home">
                <HomeBanner/>
            </div>
            <CardsGrid/>
            <Posts posts={posts}/>
        </>
    )
}

export default Home;