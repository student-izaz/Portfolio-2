import React, { useState, useContext } from "react";
import "./TopMenu.css";
import { IoMenuOutline } from "react-icons/io5";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { Link } from "react-router-dom";
import {ThemeContext} from '../App';

function TopMenu({ darkMode, setDarkMode }) {
  const Theme = useContext(ThemeContext);
  const [toggleMode, setToggleMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleModes = () => {
    setToggleMode(!toggleMode);
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`top-menu ${Theme && 'topDark'}`}>
        <div className="menu-content">
          <h1>Portfolio</h1>
        </div>
        <div className="icons">
          <div className="toggle-mode" onClick={toggleModes}>
            {toggleMode ? (
              <MdLightMode className="icon"/>
            ) : (
              <MdOutlineDarkMode className="icon"/>
            )}
          </div>
          <div className="menu-icon" onClick={toggleMenu}>
            <IoMenuOutline className="icon" />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="links">
          <div className="close-menu" onClick={closeMenu}>
            <p>X</p>
          </div>
          <ul>
            <li>
              <Link to="/about" className="blue">
                About
              </Link>
            </li>
            <li>
              <Link to="/resume" className="red">
                Resume
              </Link>
            </li>
            <li>
              <Link to="/work" className="green">
                Work
              </Link>
            </li>
            <li>
              <Link to="/contact" className="pink">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default TopMenu;