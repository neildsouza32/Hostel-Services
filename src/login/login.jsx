import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

export const Login = (props) => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (response.ok) {
        // If login is successful, store the token and redirect to the home page
        const data = await response.json();
        localStorage.setItem('token', data.accessToken);
        window.location.href = "/home";
      } else {
        // If login fails, show an alert
        alert("Wrong login credentials. Please try again.");
      }
    } catch (error) {
      // Handle fetch request errors
      console.error("An error occurred while logging in:", error);
    }
  };

  // return (
  //   <div className="auth-form-container">
  //     <h2>Login</h2>
  //     <form className="login-form" onSubmit={handleSubmit}>
        
  //       <label htmlFor="username">Username</label>
  //       <input
  //         value={username}
  //         onChange={(e) => setUserName(e.target.value)}
  //         type="text"
  //         placeholder="Username"
  //         id="username"
  //         name="username"
  //       />

  //       <label htmlFor="password">Password</label>
  //       <input
  //         value={password}
  //         onChange={(e) => setPassword(e.target.value)}
  //         type="password"
  //         placeholder="********"
  //         id="password"
  //         name="password"
  //       />

  //       <button type="submit">Log In</button>
  //     </form>
  //     <Link to="/reg">
  //       <button className="link-btn">Don't have an account? Register here.</button>
  //     </Link>
  //   </div>
  // );


  return (
    <div className="login-page">
     <div className="login-container">
      
            {/* <Ehsaas /> */}
            <form className='LoginForm' onSubmit={handleSubmit}>
                <div className="LoginprofileIcon">
                    <img src={require("../assets/myLogo.png")} alt="name"
                        className='myProfileLogo'
                    />
                </div>
                <div className="profileInfo">
                    <div className="profileName">
                        <img src={require("../assets/profileName.jpg")} alt="name"
                            className='profileLogos'
                        />
                        <input type="text" placeholder="Username" onChange={(e) => setUserName(e.target.value)} className='profileEnterName' name='id' />
                    </div>
                    <div className="profileName">
                        <img src={require("../assets/profilePass.jpg")} alt="name"
                            className='profileLogos'
                        />
                        
                        <input type="password"  placeholder="Password" onChange={(e) => setPassword(e.target.value)} className='profileEnterName'  name='password' />
                    </div>
                    <button className="ProfileSubmit" type='submit'>Login</button>
                </div>
                <Link to="/alogin">
                  <button className="admin-login-button">Switch to Admin Login</button>
                </Link>
            </form>
            <div className="login-btn-container">
            <Link to="/regm">
            <button className="link-btn">Don't have an account? Register here.</button>
          </Link>
          </div>
          </div>
    </div> 
  );
};

export default Login;
