import React, { useState } from "react";
import "./trial.css";
// import { Register } from "./register";
import { Link } from "react-router-dom";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("hello");
        window.location.href="./home"
        console.log(email);
    }
    return (
        <div className='LoginPage'>
            {/* <Ehsaas /> */}
            <form className='LoginForm' onSubmit={handleSubmit}>
                <div className="LoginprofileIcon">
                    <img src={require("../assets/myLogo.png")} alt="name"
                        className='myProfileLogo'
                    />
                </div>
                <div className="profileInfo">
                    <div className="profileName">
                        <img src={require("../assets/profileName.png")} alt="name"
                            className='profileLogos'
                        />
                        <input type="text" placeholder='Enter ID' className='profileEnterName' name='id' />
                    </div>
                    <div className="profileName">
                        <img src={require("../assets/profileName.png")} alt="name"
                            className='profileLogos'
                        />
                        {/* <label htmlFor="email">email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                        <label htmlFor="password">password</label>
                        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                        <button onClick={handleSubmit}>Log In</button> */}
                        <input type="text" placeholder='Password' className='profileEnterName'  name='password' />
                    </div>
                    <button className="ProfileSubmit" type='submit'>Login</button>
                </div>
            </form>
        </div>

    )
}

export default Login;