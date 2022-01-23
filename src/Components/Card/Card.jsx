import './card.css';
import React from 'react';

function Card({title,image}){

    return(
        <div className='card'>
            <img src={`../../../img/${image}`} alt="" />
            <div className="card_title">
                <h3>{title}</h3>
            </div>
        </div>
    )
}

export default Card;