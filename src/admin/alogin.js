import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./styles/alogin.css";

export const Alogin = (props) => {
  const [ausername, setUserName] = useState('');
  const [apassword, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/v5/login-admin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: ausername,
          password: apassword,
        }),
      });

      if (response.ok) {
        // If login is successful, store the token and redirect to the home page
        const data = await response.json();
        localStorage.setItem('token', data.accessToken);
        window.location.href = "/ahome";
      } else {
        // If login fails, show an alert
        alert("Wrong login credentials. Please try again.");
      }
    } catch (error) {
      // Handle fetch request errors
      console.error("An error occurred while logging in:", error);
    }
  };

  return (
    <div className="login-page">
     <div className="login-container">
            <form className='LoginForm' onSubmit={handleSubmit}>
                <div className="LoginprofileIcon">
                    <img src={require("../assets/myLogo.png")} alt="name" className='myProfileLogo' />
                </div>
                <div className="profileInfo">
                    <div className="profileName">
                        <img src={require("../assets/profileName.jpg")} alt="name" className='profileLogos' />
                        <input type="text" onChange={(e) => setUserName(e.target.value)} placeholder="Username" className='profileEnterName' name='id' />
                    </div>
                    <div className="profileName">
                        <img src={require("../assets/profilePass.jpg")} alt="name" className='profileLogos' />
                        <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" className='profileEnterName' name='password' />
                    </div>
                    <button className="ProfileSubmit" type='submit'>Login</button>
                </div>

                {/* Add a button to redirect to the admin login page */}
                <Link to="/">
                  <button className="admin-login-button"> Switch to Student Login</button>
                </Link>
            </form>

            
          </div>
    </div> 
  );
};

export default Alogin;
