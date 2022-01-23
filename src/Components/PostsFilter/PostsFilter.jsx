import React from "react";
import './postsfilter.css';

function PostsFilter(){
    return(
        <div className="postsFilter">
            <ul className="postsCats">
                <li><a>Todas las entradas</a></li>
                <li><a>Gastronomía</a></li>
                <li><a>Destinos</a></li>
                <li><a>Relax</a></li>
            </ul>
            <i className="fas fa-search searchIcon"></i>
        </div>
    )
}

export default PostsFilter;