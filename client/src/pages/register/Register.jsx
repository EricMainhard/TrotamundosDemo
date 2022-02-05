import React, {useState} from "react";
import { Link } from "react-router-dom";
import './register.css';
import axios from 'axios';

function Register(){

    const [username,setUsername] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [error,setError] = useState(false);

    const handleUsername = (e)=> {
        let username = e.target.value;
        setUsername(username);
    }

    const handleEmail = (e)=> {
        let email = e.target.value;
        setEmail(email);
    }

    const handlePassword = (e)=> {
        let password = e.target.value;
        setPassword(password);
    }

    const handleSubmit = async (e)=> {
        e.preventDefault();
        setError(false);
        try {
            let res = await axios.post("http://localhost:5000/api/auth/register",{
                username,
                email,
                password
            });
            res.data && window.location.replace('/login');
        } catch(e){
            setError(true);
        }
    }

    return(
        <div className="register">
            <form className="registerForm" onSubmit={handleSubmit}>

                <label htmlFor="registerName">Name</label>
                <input type="text" name="username" id="registerName" onChange={handleUsername}/>

                <label htmlFor="registerEmail">Email</label>
                <input type="text" name="email" id="registerEmail" onChange={handleEmail}/>
                
                <label htmlFor="registerPassword">Password</label>
                <input type="password" name="password" id="registerPassword" onChange={handlePassword}/>

                <button className="registerButton">Register</button>
            </form>
            {error && <span>Something went wrong</span>}
            <div className="registerLogin">
                <span>Already a user?</span>
                <Link className="link" to="/login">Log in</Link>
            </div>
        </div>
    )
}

export default Register;