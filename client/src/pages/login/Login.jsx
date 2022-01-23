import React from "react";
import { Link } from "react-router-dom";
import './login.css';

function Login(){
    return(
        <div className="login">
            <form className="loginForm">
                <label htmlFor="loginEmail">Email</label>
                <input type="text" id="loginEmail"/>
                
                <label htmlFor="loginPassword">Password</label>
                <input type="text" id="loginPassword"/>

                <button className="loginButton">Login</button>
            </form>
            <span>Not have an account yet?</span>
            <Link className="link" to="/register">Create one </Link>
        </div>
    )
}

export default Login;