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
                <li><Link className="link" to="/posts">All entries</Link></li>
                {cats.map(cat => {
                    return <li><Link className="link" to={`/post/${cat.name}`}>{cat.name}</Link></li>
                })}
            </ul>
            <i className="fas fa-search searchIcon"></i>
        </div>
    )
}

export default PostsFilter;