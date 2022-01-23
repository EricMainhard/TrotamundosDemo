import React from "react";
import './cardsgrid.css';
import Card from '../Card/Card';

function CardsGrid(){
    return(
        <div className="cardsSection container">
            <p className="cardsHeading">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam illum atque iusto molestiae, repellendus aliquid.</p>
            <div className="cardsContainer">
                <Card title="Destinos" image='destinys.jpg'/>
                <Card title="Gastronomía" image='gastronomy.jpg'/>
                <Card title="Relax" image='relax.jpg'/>
            </div>
        </div>
    )
}

export default CardsGrid;