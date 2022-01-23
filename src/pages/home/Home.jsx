import React from 'react';
import './home.css';
import HomeBanner from '../../Components/HomeBanner/HomeBanner';
import CardsGrid from '../../Components/CardsGrid/CardsGrid';
import Posts from '../../Components/Posts/Posts'

function Home(){
    return(
        <>
            <div className="home">
                <HomeBanner/>
            </div>
            <CardsGrid/>
            <Posts/>
        </>
    )
}

export default Home;