import React, { useState, useContext } from "react";
import "./TopMenu.css";
import { IoMenuOutline } from "react-icons/io5";
import { MdOutlineDarkMode, MdLightMode } from "react-icons/md";
import { Link } from "react-router-dom";
import { ThemeContext } from "../App";

function TopMenu({ darkMode, setDarkMode }) {
  const Theme = useContext(ThemeContext);
  const [toggleMode, setToggleMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleModes = () => {
    setToggleMode((prev) => !prev);
    setDarkMode((prev) => !prev);
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false); // ✅ Fixed: was toggling instead of setting false
  };

  return (
    <>
      <div className={`top-menu ${Theme ? "topDark" : ""}`}>
        <div className="menu-content">
          <h1>Portfolio</h1>
        </div>
        <div className="icons">
          <div
            className="toggle-mode"
            onClick={toggleModes}
            role="button"
            aria-label="Toggle Theme"
          >
            {toggleMode ? <MdLightMode className="icon" /> : <MdOutlineDarkMode className="icon" />}
          </div>
          <div
            className="menu-icon"
            onClick={toggleMenu}
            role="button"
            aria-label="Open Menu"
          >
            <IoMenuOutline className="icon" />
          </div>
        </div>
      </div>

      <div className={`links ${isOpen ? "active" : ""}`}>
        <div className="close-menu" onClick={closeMenu}>
          <p>X</p>
        </div>
        <ul>
          <li>
            <Link to="/about" className="blue" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/resume" className="red" onClick={closeMenu}>
              Resume
            </Link>
          </li>
          <li>
            <Link to="/work" className="green" onClick={closeMenu}>
              Work
            </Link>
          </li>
          <li>
            <Link to="/contact" className="pink" onClick={closeMenu}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/certificate" className="green" onClick={closeMenu}>
              Certificate
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default TopMenu;
