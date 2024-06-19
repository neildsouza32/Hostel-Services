import React from "react";

import BannerImage from "../assets/hostel.jpg";
import "../styles/Home.css";
import Navbar from "./anavbar";

function Home() {
  
  return (
  <>
  <Navbar/>
  <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>  
    <div className='home'>
      <div className="headerContainer">
        <h1 style={{ color: "white" }}> ADMIN LOGIN </h1>
        <p style={{ color: "white" }}> </p>
        
      </div>
    </div>
  </div>
  </>
  );
}

export default Home;