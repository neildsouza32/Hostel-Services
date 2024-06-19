import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "./styles/anavbar.css";
import Logo from "../assets/fcritl.png";
import NavLink from "./anavlink";
import myLogo from "../assets/myLogo.png";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const location = useLocation(); // React Router's useLocation hook

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  const handleLogout = () => {
    // Implement the logout logic here
    // For example, clear the user's session or token
    // Redirect to the login page, etc.
    window.location.href = "/alogin";
  };

  return (
    <div className="navbar">
      <div className={`leftSide ${openLinks ? "open" : "close"}`}>
        <div className="logoWithText">
          <a href="https://www.fcrit.ac.in/" target="_blank" rel="noopener noreferrer">
            <img src={Logo} alt="FCRIT Logo" />
          </a>
          {/* <span className="logoText"><b>HOSTEL MANAGEMENT SYSTEM</b></span> */}
        </div>
        <div className="hiddenLinks">
          <Link to="/ahome"> Home </Link>
          <Link to="/dayl"> Day Leave</Link>
          <Link to="/vacl"> Vacation Leave </Link>
          <Link to=""> Contact </Link>
        </div>
      </div>
      <div className="rightSide">
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
        <div className="navbar-links">
          <NavLink to="/ahome" label="Home" currentPath={location.pathname} />
          <NavLink to="/dayl" label="Day Leave" currentPath={location.pathname} />
          <NavLink to="/vacl" label="Vacation Leave" currentPath={location.pathname} />
        </div>
        
        {/* Add the Log Out button */}
        <Link to="/alogin">
        <button className="logout-button">Log Out</button>
        </Link>
        </div>
      
    </div>
  );
}

export default Navbar;

