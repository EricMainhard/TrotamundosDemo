import React, {useRef,useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import './login.css';
import axios from 'axios';

function Login(){

    const userRef = useRef();
    const passwordRef = useRef();
    const {dispatch,isFetching, user} = useContext(Context);

    const handleSubmit = async (e)=> {
        e.preventDefault();
        dispatch({type:"LOGIN_START"});
        try {
            const res = await axios.post("/auth/login",{
                username: userRef.current.value,
                password: passwordRef.current.value
            })
            dispatch({type:"LOGIN_SUCCESS",payload: res.data});
        } catch(e){
            dispatch({type:"LOGIN_FAIL"});
        }
    }

    console.log(user)
    return(
        <div className="login">
            <form className="loginForm" onSubmit={handleSubmit}>
                <label htmlFor="loginUsername">Username</label>
                <input type="text" id="loginUsername" ref={userRef}/>
                
                <label htmlFor="loginPassword">Password</label>
                <input type="password" id="loginPassword" ref={passwordRef}/>

                <button className="loginButton" type="submit">Login</button>
            </form>
            <span>Not have an account yet?</span>
            <Link className="link" to="/register">Create one </Link>
        </div>
    )
}

export default Login;