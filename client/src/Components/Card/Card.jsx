import './card.css';
import React from 'react';
import {Link} from 'react-router-dom';

function Card({title,image}){
    return(
        <div className='card'>
            <img src={'/img/'+image.toLowerCase()+'.jpg'} alt="" />
            <div className="card_title">
                <Link className="link" to={`/post/${title}`}>
                    <h3>
                        {title}
                    </h3>
                </Link>
            </div>
        </div>
    )
}

export default Card;