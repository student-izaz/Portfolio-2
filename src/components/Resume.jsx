import React, { useContext } from "react";
import "./Resume.css";
import { ThemeContext } from "../../src/App";
import Footer from "./Footer";
import { MdCastForEducation } from "react-icons/md";
import { PiBagSimpleBold } from "react-icons/pi";
import { FaTools } from "react-icons/fa";

import { FaReact } from "react-icons/fa";

import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";

import { TbApi } from "react-icons/tb";

import { SiMongodb } from "react-icons/si";
import { BsDatabaseGear } from "react-icons/bs";
import { SiMysql } from "react-icons/si";
import { RiFileExcel2Line } from "react-icons/ri";

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
                  <p>2025</p>
                </div>
                <div className="course-name">
                  <p>Professional Data Analyst</p>
                </div>
                <div className="collage-name">
                  <p>Ducat</p>
                </div>
              </div>
              <div className="edu-card flex-col edu-col-3">
                <div className="duration">
                  <p>2021-2024</p>
                </div>
                <div className="course-name">
                  <p>Master Diploma In Computer Application</p>
                </div>
                <div className="collage-name">
                  <p>Indian Institute of Computer Science</p>
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
            </div>
          </div>

          <div className="experience flex-col">
            <div className="sub-heading flex">
              <PiBagSimpleBold className="icon-exp" />
              <h2>Experience</h2>
            </div>
            <div className="about-experience flex-col">
              <div className="exp-card flex-col exp-col-2">
                <div className="duration">
                  <p>May 2026 - Aug 2026</p>
                </div>
                <div className="field-name job_title">
                  <p>Data Analyst</p>
                  <span style={{ fontSize: "13px" }}>Noida</span>
                </div>
                <div className="org-name">
                  <p>Global Websters</p>
                </div>
              </div>
              <div className="exp-card flex-col exp-col-3">
                <div className="duration">
                  <p>Feb 2026 - May 2026</p>
                </div>
                <div className="field-name job_title">
                  <p>MIS Executive</p>
                  <span style={{ fontSize: "13px" }}>UAE</span>
                </div>
                <div className="org-name">
                  <p>Goyal Brother Prakashan</p>
                </div>
              </div>
              <div className="exp-card flex-col exp-col-1">
                <div className="duration">
                  <p>2025 Aug - 2026 Feb</p>
                </div>
                <div className="field-name job_title">
                  <p>Operation Analyst</p>
                  <span style={{ fontSize: "13px" }}>Noida</span>
                </div>
                <div className="org-name">
                  <p>IISERVZ </p>
                </div>
              </div>
              
            </div>
        </div>
        </div>

        <div className="knowledge/skills flex">
          <div className="skills flex-col rg-4">
            <div className="sub-heading flex">
              <FaTools className="icon-skill" />
              <h2>Skills</h2>
            </div>
            <div className="skill-row">
              <div className="skill-col col3">
                <h2 className="skill-head">Data Analysis</h2>
                <div className="skill">
                  <ul>
                    <li><RiFileExcel2Line
 size="17px" color="rgb(78, 245, 140)"/>
                    Excel</li>
                    <li><SiMysql 
 size="17px" color="rgb(80,104,220)"/>
                    MySQL</li>
                    <li><RiFileExcel2Line size="17px" color="rgb(244, 248, 7)"/>
                    Power BI</li>
                    <li><BsDatabaseGear size="17px" color="rgb(180,104,220)"/>
                    Data Modeling</li>
                  
                  </ul>
                </div>
              </div>
              <div className="skill-col col2">
                <h2 className="skill-head">Web Development</h2>
                <div className="skill">
                  <ul>
                    <li><FaReact size="17px" color="rgb(18, 245, 219)"/>
                    React</li>
                    <li><FaNodeJs size="17px" color="rgb(63, 189, 5)"/>
                    Node.js</li>
                    <li><SiExpress size="17px" color="rgb(15, 15, 21)"/>
                    Express.js</li>
                      <li><SiMongodb size="17px" color="rgb(57, 161, 5)"/>
                    MongoDB</li>
                    <li><TbApi size="17px" color="rgb(11,111,111)"/>
                    REST APIs</li>
                  </ul>
                </div>
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