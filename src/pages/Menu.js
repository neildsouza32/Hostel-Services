// Menu.js
import React from "react";
import { Link } from "react-router-dom"; // Import Link
import { MenuList } from "../hidden pages/helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";
import Navbar from "../components/Navbar";

function Menu() {
  return (
    <>
    <Navbar/>
    <div className="menu">
      <h1 className="menuTitle">Services</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <Link
              to={`/${menuItem.name.toLowerCase().replace(/\s+/g, "-")}`}
              key={key}
              className="link-without-underline" // Apply the CSS class here
            >
              {/* Link to the Day Leave page */}
              <MenuItem name={menuItem.name} />
            </Link>
          );
        })}
      </div>
    </div>
    </>
  );
}

export default Menu;
