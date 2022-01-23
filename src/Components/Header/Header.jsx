import React from "react";
import {Link} from "react-router-dom";
import './header.css';

function Header(){
    const user = false;
   return(
        <div className="header">
            <div className="topLeft">
                <i className="fab fa-facebook-square rrssIcon" ></i>
                <i className="fab fa-instagram rrssIcon" ></i>
                <i className="fab fa-pinterest rrssIcon" ></i>
                <i className="fab fa-twitter rrssIcon" ></i>
            </div>
            <div className="topCenter">
                <i className="menuIcon fas fa-bars"></i>
                <ul className="topLinks">
                    <li className="topLink--item">
                        <Link to="/">Inicio</Link>
                    </li>
                    <li className="topLink--item">
                        <Link to="/post/destinys">Destinos</Link>
                    </li>
                    <li className="topLink--item">
                        <Link to="/post/gastronomy">Gastronomía</Link>
                    </li>
                    <li className="topLink--item">
                        <Link to="/post/relax">Relax</Link>
                    </li>
                    <li className="topLink--item">
                        <Link to="/write">Write</Link>
                    </li>
                    <li className="topLink--item">
                        <Link to="/">{user && "Log out"}</Link>
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {user ? 
                <img src="../img/avatar.jpg" alt="" className="topImg"/>
                    :
                ''
                }
                <i className="fas fa-search searchIcon"></i>
            </div>
        </div>
   )
}

export default Header;