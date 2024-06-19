import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/hostel.jpg";
import "../styles/Home.css";
import Navbar from "../components/Navbar";

function Home() {
  return (
  <>
  <Navbar/>
  <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>  
    <div className='home'>
      <div className="headerContainer">
        <h1 style={{ color: "white" }}> Hostel Management System </h1>
        <p style={{ color: "white" }}> MADE DAILY LIFE EASIER</p>
        <Link to="/about">
          <button> About us </button>
        </Link>
      </div>
    </div>
  </div>
  </>
  );
}

export default Home;