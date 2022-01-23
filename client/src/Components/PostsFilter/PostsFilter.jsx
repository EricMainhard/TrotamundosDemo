import React from "react";
import { Link } from "react-router-dom";
import './postsfilter.css';

function PostsFilter(){
    return(
        <div className="postsFilter">
            <ul className="postsCats">
                <li><Link className="link" to="/post">Todas las entradas</Link></li>
                <li><Link className="link" to="/post/gastronomy">Gastronomía</Link></li>
                <li><Link className="link" to="/post/destinys">Destinos</Link></li>
                <li><Link className="link" to="/post/relax">Relax</Link></li>
            </ul>
            <i className="fas fa-search searchIcon"></i>
        </div>
    )
}

export default PostsFilter;