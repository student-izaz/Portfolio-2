import React, { useContext } from "react";
import "./Resume.css";
import Footer from "./Footer";
import { MdCastForEducation } from "react-icons/md";
import { PiBagSimpleBold } from "react-icons/pi";
import { FaTools } from "react-icons/fa";
import { ThemeContext } from "../../src/App";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa6";
import { SiRedux } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { DiResponsive } from "react-icons/di";

import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { MdOutlineUploadFile } from "react-icons/md";
import { SiSocketdotio } from "react-icons/si";
import { BiSolidErrorCircle } from "react-icons/bi";
import { TbLayoutAlignMiddle } from "react-icons/tb";
import { TbBrandOauth } from "react-icons/tb";
import { TbApi } from "react-icons/tb";
import { GrValidate } from "react-icons/gr";

import { SiMongodb } from "react-icons/si";
import { SiMongoose } from "react-icons/si";
import { GrAggregate } from "react-icons/gr";
import { BsDatabaseGear } from "react-icons/bs";

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

        <div className="knowledge/skills flex">
          <div className="skills flex-col rg-4">
            <div className="sub-heading flex">
              <FaTools className="icon-skill" />
              <h2>Skills</h2>
            </div>
            <div className="skill-row">
              <div className="skill-col col1">
                <h2 className="skill-head">Frontend</h2>
                <div className="skill">
                  <ul>
                    <li><FaHtml5 size="17px" color="rgb(245, 105, 18)"/>
                    HTML</li>
                    <li><FaCss3Alt size="17px" color="rgb(26, 164, 238)"/>
                    CSS</li>
                    <li><TbBrandJavascript size="17px" color="rgb(239, 232, 29)"/>
                    Javascript</li>
                    <li><FaReact size="17px" color="rgb(18, 245, 219)"/>React</li>
                    <li><FaBootstrap size="17px" color="rgb(122, 23, 242)"/>
                    Bootstrap</li>
                    <li><SiRedux size="17px" color="rgb(209, 19, 247)"/>
                    Redux</li>
                    <li><DiResponsive size="20px" color="rgb(39, 253, 157)"/>
                    Responsive Design</li>
                  </ul>
                </div>
              </div>
              <div className="skill-col col2">
                <h2 className="skill-head">Backend</h2>
                <div className="skill">
                  <ul>
                    <li><FaNodeJs size="17px" color="rgb(63, 189, 5)"/>
                    Node.js</li>
                    <li><SiExpress size="17px" color="rgb(15, 15, 21)"/>
                    Express.js</li>
                    <li><TbApi size="17px" color="rgb(11,111,111)"/>
                    REST APIs</li>
                    <li><GrGraphQl size="17px" color="rgb(231, 15, 220)"/>
                    GraphQL</li>
                    <li><TbBrandOauth size="17px" color="rgb(111,50,22)"/>
                    Authentication</li>
                    <li><TbLayoutAlignMiddle size="17px" color="rgb(85, 10, 246)"/>
                    Middleware</li>
                    <li><SiSocketdotio size="17px" color="rgb(201, 255, 6)"/>
                    WebSocket</li>
                    <li><GrValidate size="17px" color="rgb(30,60,90)"/>
                    Validation</li>
                    <li><BiSolidErrorCircle size="17px" color="rgb(14, 117, 242)"/>
                    Error Handling</li>
                    <li><MdOutlineUploadFile size="17px" color="rgb(214, 17, 17)" />
                    File Upload</li>
                  </ul>
                </div>
              </div>
              <div className="skill-col col3">
                <h2 className="skill-head">Database</h2>
                <div className="skill">
                  <ul>
                    <li><SiMongodb size="17px" color="rgb(57, 161, 5)"/>
                    MongoDB</li>
                    <li><SiMongoose size="17px" color="rgb(80,104,220)"/>
                    Mongoose</li>
                    <li><GrAggregate size="17px" color="rgb(80,100,20)"/>
                    Aggregation</li>
                    <li><BsDatabaseGear size="17px" color="rgb(180,104,220)"/>
                    Data Modeling</li>
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