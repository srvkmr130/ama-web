import React, { useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import "./styles/navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../resources/brand-logo.png";
import { TAB } from "../../utils/enums";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [tabOption, setTabOption] = useState(TAB.HOME);

  const handleTabChange = (tab: TAB) => {
    setTabOption(tab);
  };

  const menuOptions = useMemo(
    () => (
      <ul>
        <li>
          <NavLink to="/" onClick={() => handleTabChange(TAB.HOME)}>
            Home
          </NavLink>
          <div className={tabOption === TAB.HOME ? "selected" : ""}></div>
        </li>
        <li>
          <NavLink to="/product" onClick={() => handleTabChange(TAB.PRODUCTS)}>
            Products
          </NavLink>
          <div className={tabOption === TAB.PRODUCTS ? "selected" : ""}></div>
        </li>
        <li>
          <NavLink to="/awards" onClick={() => handleTabChange(TAB.AWARDS)}>
            Awards
          </NavLink>
          <div className={tabOption === TAB.AWARDS ? "selected" : ""}></div>
        </li>
        <li>
          <NavLink to="/media" onClick={() => handleTabChange(TAB.MEDIA)}>
            Media
          </NavLink>
          <div className={tabOption === TAB.MEDIA ? "selected" : ""}></div>
        </li>
        <li>
          <NavLink to="/contacts" onClick={() => handleTabChange(TAB.CONTACTS)}>
            Contacts
          </NavLink>
          <div className={tabOption === TAB.CONTACTS ? "selected" : ""}></div>
        </li>
        <li>
          <NavLink to="/career" onClick={() => handleTabChange(TAB.CAREER)}>
            Career
          </NavLink>
          <div className={tabOption === TAB.CAREER ? "selected" : ""}></div>
        </li>
      </ul>
    ),
    [tabOption]
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
export default Navbar;
