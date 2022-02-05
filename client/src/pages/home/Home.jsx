import React, { useEffect, useState } from 'react';
import './home.css';
import HomeBanner from '../../Components/HomeBanner/HomeBanner';
import CardsGrid from '../../Components/CardsGrid/CardsGrid';
import Posts from '../../Components/Posts/Posts';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function Home(){

    const [posts,setPosts] = useState([]);
    const {search} = useLocation();

    useEffect(()=>{
        const fetchPosts = async ()=>{
            let res = await axios.get("/posts"+search)
            setPosts(res.data);
        }
        fetchPosts();
    },[search])
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