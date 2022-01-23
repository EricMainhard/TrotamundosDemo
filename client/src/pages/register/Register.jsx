import React from "react";
import { Link } from "react-router-dom";
import './register.css';

function Register(){
    return(
        <div className="register">
            <form className="registerForm">

                <label htmlFor="registerName">Name</label>
                <input type="text" id="registerName"/>

                <label htmlFor="registerPhone">Phone</label>
                <input type="text" id="registerPhone"/>

                <label htmlFor="registerEmail">Email</label>
                <input type="text" id="registerEmail"/>
                
                <label htmlFor="registerPassword">Password</label>
                <input type="text" id="registerPassword"/>

                <button className="registerButton">Register</button>
            </form>
            <div className="registerLogin">
                <span>Already a user?</span>
                <Link className="link" to="/login">Log in</Link>
            </div>
        </div>
    )
}

export default Register;