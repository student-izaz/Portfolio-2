import React, { useContext } from "react";
import "./Resume.css";
import Footer from "./Footer";
import { MdCastForEducation } from "react-icons/md";
import { PiBagSimpleBold } from "react-icons/pi";
import { FaTools } from "react-icons/fa";
import { ThemeContext } from "../../src/App";

function Resume() {
  const Theme = useContext(ThemeContext);

  return (
    <div className={`resume-section ${Theme && "dark-theme"}`}>
      <div className="resume-me flex-col">
        <div className="heading">
          <h1>Resume</h1>
        </div>

        <div className="educ-expe flex">
          <div className="education flex-col">
            <div className="sub-heading flex">
              <MdCastForEducation className="icon-edu" />
              <h2>Education</h2>
            </div>
            <div className="about-education flex-col">
              <div className="edu-card flex-col edu-col-1">
                <div className="duration">
                  <p>2020-2021</p>
                </div>
                <div className="course-name">
                  <p>12th</p>
                </div>
                <div className="collage-name">
                  <p>Government (CBSE)</p>
                </div>
              </div>
              <div className="edu-card flex-col edu-col-2">
                <div className="duration">
                  <p>2021-2024</p>
                </div>
                <div className="course-name">
                  <p>B.A</p>
                </div>
                <div className="collage-name">
                  <p>Delhi University</p>
                </div>
              </div>
              <div className="edu-card flex-col edu-col-3">
                <div className="duration">
                  <p>2021-2024</p>
                </div>
                <div className="course-name">
                  <p>Master Diploma In Computer Enginnering</p>
                </div>
                <div className="collage-name">
                  <p>Indian Institute of Computer Science</p>
                </div>
              </div>
            </div>
          </div>

          <div className="experience flex-col">
            <div className="sub-heading flex">
              <PiBagSimpleBold className="icon-exp" />
              <h2>Experience</h2>
            </div>
            <div className="about-experience flex-col">
              <div className="exp-card flex-col exp-col-1">
                <div className="duration">
                  <p>1 Month (Internship)</p>
                </div>
                <div className="field-name">
                  <p>Web Development</p>
                  <span style={{ fontSize: "13px" }}>online</span>
                </div>
                <div className="org-name">
                  <p>UNIFIED MENTOR</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="knowledge/skils flex">
          <div className="skills flex-col rg-4">
            <div className="sub-heading flex">
              <FaTools className="icon-skill"/>
              <h2>Skills</h2>
            </div>
            <div className="all-skills flex rg-2">
              <div className="skill">
                <p>HTML</p>
              </div>
              <div className="skill">
                <p>CSS</p>
              </div>
              <div className="skill">
                <p>JAVASCRIPT</p>
              </div>
              <div className="skill">
                <p>BOOTSTRAP</p>
              </div>
              <div className="skill">
                <p>REACT</p>
              </div>
              <div className="skill">
                <p>NODE JS</p>
              </div>
              <div className="skill">
                <p>EXPRESS JS</p>
              </div>
              <div className="skill">
                <p>MONGODB</p>
              </div>
              <div className="skill">
                <p>PYTHON</p>
              </div>
              <div className="skill">
                <p>PHP</p>
              </div>
              <div className="skill">
                <p>MYSQL</p>
              </div>
              <div className="skill">
                <p>GITHUB</p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Resume;
