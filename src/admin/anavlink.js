// NavLink.js

import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavLink.css";

function NavLink({ to, label, currentPath }) {
  const isActive = currentPath === to;

  return (
    <Link to={to} className={`nav-link ${isActive ? "active" : ""}`}>
      {label}
      {isActive && <div className="nav-link-highlight"></div>}
    </Link>
  );
}

export default NavLink;
