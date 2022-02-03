import React, {useEffect, useState} from "react";
import './cardsgrid.css';
import Card from '../Card/Card';
import axios from 'axios';

function CardsGrid(){

    const [cats,setCats] = useState([]);

    useEffect(()=>{
        const getCats = async()=>{
            let {data} = await axios.get('/categories');
            setCats(data);
        }
        getCats();
    },[])

    return(
        <div className="cardsSection container">
            <p className="cardsHeading">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam illum atque iusto molestiae, repellendus aliquid.</p>
            <div className="cardsContainer">
                {cats.map((cat) => {
                    return (
                        <Card key={cat._id} title={cat.name} image={cat.name}/>
                    )
                })}
            </div>
        </div>
    )
}

export default CardsGrid;