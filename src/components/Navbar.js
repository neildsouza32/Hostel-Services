import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";
import Logo from "../assets/fcritl.png";
import NavLink from "./NavLink";
import myLogo from "../assets/myLogo.png";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const location = useLocation(); // React Router's useLocation hook

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
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
          <Link to="/home"> Home </Link>
          <Link to="/menu"> Services</Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
          <Link to="/fee"> Fee Payment </Link>
        </div>
      </div>
      <div className="rightSide">
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
        <div className="navbar-links">
          <NavLink to="/home" label="Home" currentPath={location.pathname} />
          <NavLink to="/menu" label="Services" currentPath={location.pathname} />
          <NavLink to="/about" label="About" currentPath={location.pathname} />
          <NavLink to="/contact" label="Contact" currentPath={location.pathname} />
          {/* <NavLink to="/fee" label="Fee Payment" currentPath={location.pathname} /> */}
        </div>
        <div className="logo">
        {/* Add your logo image and specify the path to the page you want to navigate to */}
        <Link to="/profile">
          <img src={myLogo} alt="Your Logo" />
        </Link>
      </div>
      </div>
    </div>
  );
  }

export default Navbar;
