import React from "react";
import './header.css';

function Header(){
   return(
        <div className="header">
            <div className="topLeft">
                <i className="fab fa-facebook-square rrssIcon" ></i>
                <i className="fab fa-instagram rrssIcon" ></i>
                <i className="fab fa-pinterest rrssIcon" ></i>
                <i className="fab fa-twitter rrssIcon" ></i>
            </div>
            <div className="topCenter">
                <ul className="topLinks">
                    <li className="topLink--item">Inicio</li>
                    <li className="topLink--item">Sobre mi</li>
                    <li className="topLink--item">Destinos</li>
                    <li className="topLink--item">Gastronomía</li>
                    <li className="topLink--item">Relax</li>
                    <li className="topLink--item">Videos</li>
                </ul>
            </div>
            <div className="topRight">
                <img src="../avatar.jpg" alt="" className="topImg"/>
                <i className="fas fa-search searchIcon"></i>
            </div>
        </div>
   )
}

export default Header;