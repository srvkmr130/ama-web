import React, { useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import "./styles/navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../resources/brand-logo.png";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const menuOptions = useMemo(
    () => (
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/product">Products</NavLink>
        </li>
        <li>
          <NavLink to="/awards">Awards</NavLink>
        </li>
        <li>
          <NavLink to="/media">Media</NavLink>
        </li>
        <li>
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
        <li>
          <NavLink to="/career">Career</NavLink>
        </li>
      </ul>
    ),
    []
  );
  return (
    <nav className="main-nav">
      <div className="logo">
        <img alt="brandLogoImage" src={logo} />
      </div>
      {!showMenu && <div className="menu-link">{menuOptions}</div>}
      <div className="hamburger-menu">
        <NavLink to="/" onClick={() => setShowMenu(!showMenu)}>
          <GiHamburgerMenu />
        </NavLink>
        {showMenu && (
          <div className="menu-link mobile-menu-link">{menuOptions}</div>
        )}
      </div>
    </nav>
  );
}
{
  /* <div className={showMenu ? "menu-link mobile-menu-link" : "menu-link"}> */
}
export default Navbar;
