import React from "react";
import "./LeftSideBar.css";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { FaDownload } from "react-icons/fa6";
import { assets } from "../assets/images";

function LeftSideBar({ darkMode }) {
  return (
    <div className={`leftSideBar ${darkMode && "darkLeftSideBar"}`}>
      <div className="SideBar flex-col-alg">
        <div className="primary-details flex-col-alg">
          <div className="my-image">
            <img src={assets.my_im || ""} />
          </div>
          <div className="my_name">
            <h2>MOHAMMAD IZAZ</h2>
          </div>
          <div className="title">FULL STACK DEVELOPER</div>
          <div className="social-icon">
            <div className="icon icon-1">
              <a href="https://github.com/student-izaz?tab=repositories"><FaGithub /></a>
            </div>
            <div className="icon icon-2">
              <a href="https://www.instagram.com/mdizaz__13/"><FaInstagram /></a>
            </div>
            <div className="icon icon-3">
              <a href=""><FaWhatsapp /></a>
            </div>
            <div className="icon icon-4">
              <a href="https://www.linkedin.com/in/izaz-ahmed-7b1aa426b/"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
        <div className="contact-details">
          <div className="phone ctn-type">
            <div className="icon">
              <IoIosPhonePortrait style={{ color: "rgb(241, 104, 166)" }} />
            </div>
            <div className="detail">
              <p>Phone</p>
              <h4>+ 8376914443</h4>
            </div>
          </div>
          <div className="email ctn-type">
            <div className="icon">
              <MdEmail style={{ color: "rgb(102, 206, 222)" }} />
            </div>
            <div className="detail">
              <p>Email</p>
              <h4>izazahmed109@gmail.com</h4>
            </div>
          </div>
          <div className="location ctn-type">
            <div className="icon">
              <MdLocationOn style={{ color: "rgb(220, 156, 101)" }} />
            </div>
            <div className="detail">
              <p>Location</p>
              <h4>New Delhi - 62 INDIA</h4>
            </div>
          </div>
          <div className="birthday ctn-type">
            <div className="icon">
              <SlCalender style={{ color: "rgb(92, 193, 181)" }} />
            </div>
            <div className="detail">
              <p>Birtrhday</p>
              <h4>Mar 17, 2002</h4>
            </div>
          </div>
        </div>
        <div className="download-cv-btn">
          <button className="primary-btn btn">
            <FaDownload /> Download CV
          </button>
        </div>
      </div>
    </div>
  );
}

export default LeftSideBar;
