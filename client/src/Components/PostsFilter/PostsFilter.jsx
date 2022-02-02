import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import './postsfilter.css';
import axios from "axios";  

function PostsFilter(){

    const [cats,setCats] = useState([]);

    useEffect(()=>{
        const getCats = async()=>{
            let res = await axios.get('/categories');
            setCats(res.data);
        }
        getCats();
    },[])

    return(
        <div className="postsFilter">
            <ul className="postsCats">
                <li><Link className="link" to="/post">Todas las entradas</Link></li>
                {cats.map(cat => {
                    <li><Link className="link" to={`/post/${cat}`}>{cat}</Link></li>
                })}
            </ul>
            <i className="fas fa-search searchIcon"></i>
        </div>
    )
}

export default PostsFilter;