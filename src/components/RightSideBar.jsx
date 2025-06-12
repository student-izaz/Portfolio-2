import React, { useContext } from "react";
import "./RightSideBar.css";
import { FaRegUser } from "react-icons/fa";
import { TiDocumentDelete } from "react-icons/ti";
import { RiContactsBookLine } from "react-icons/ri";
import { MdOutlineWorkOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { ThemeContext } from "../App";

function RightSideBar({selectedTab, setSelectedTab}) {
  const Theme = useContext(ThemeContext);
  return (
    <div className={`RightSideBar ${Theme && "dark-rightbar"}`}>
      <div className="menu">
        <div className="toggle-menu fl-col">
          <div onClick={()=>{setSelectedTab('About')}} className={`option fl-col ${selectedTab === 'About' && 'active'}`}>
            <Link to="/about" className="active" >
              <FaRegUser className="icon" />
              <p>About</p>
            </Link>
          </div>
          <div onClick={()=>{setSelectedTab('Resume')}} className={`option fl-col ${selectedTab === 'Resume' && 'active'}`}>
            <Link to="/resume">
              <TiDocumentDelete className="icon" />
              <p>Resume</p>
            </Link>
          </div>
          <div onClick={()=>{setSelectedTab('Work')}} className={`option fl-col ${selectedTab === 'Work' && 'active'}`}>
            <Link to="/work">
              <MdOutlineWorkOutline className="icon" />
              <p>Works</p>
            </Link>
          </div>
          <div onClick={()=>{setSelectedTab('Contact')}} className={`option fl-col ${selectedTab === 'Contact' && 'active'}`}>
            <Link to="/contact">
              <RiContactsBookLine className="icon" />
              <p>Contact</p>
            </Link>
          </div>
          <div onClick={()=>{setSelectedTab('Certificate')}} className={`option fl-col ${selectedTab === 'Certificate' && 'active'}`}>
            <Link to="/certificate">
              <RiContactsBookLine className="icon" />
              <p>Certificate</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSideBar;
