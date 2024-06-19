import React from "react";
import image from "../assets/hostel3.jpg";
import "../styles/About.css";
import Navbar from "../components/Navbar";

function About() {
  return (
    <>
     <Navbar/>
    <div className="about">
   
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        The proposed system addresses the inefficiencies of traditional college hostel services by introducing an online management system. The project focuses on digitizing leave applications, fee payments, holiday permissions, and administrative processes that currently involve manual paperwork and multiple signatures. The proposed online platform streamlines these procedures, eliminating the need for physical visits to authorities. This transition enhances convenience, reduces delays, and fosters efficient communication between students and hostel staff. By centralizing documentation and automating workflows, the project aims to significantly improve the hostel living experience, setting the foundation for future expansion and service enhancements. The project's innovation lies in simplifying administrative tasks and empowering students within the modern hostel environment. This project can act as a business model that can be owned by colleges or institutes to make their hostel services faster and with ease
        </p>
        <a href="https://www.fcrit.ac.in/" target="_blank" rel="noopener noreferrer">
          <button>More about the College</button>
        </a>
      </div>
    </div>
    </>
  );
}

export default About;




