import React, { useContext } from "react";
import "./About.css";
import { IoCodeSlashSharp } from "react-icons/io5";
import { ThemeContext } from "../App";
import Footer from "./Footer";

function About() {
  const Theme = useContext(ThemeContext);

  return (
    <>
    <div className={`about-section ${Theme && "about-dark"}`}>
      <div className="about-me flx-col">
        <div className="heading">
          <h1>About</h1>
        </div>
        <div className="about-text">
          <p>
I'm a passionate fresher with solid knowledge of the MERN stack (MongoDB, Express.js, React.js, Node.js) and a strong interest in full-stack web development.
Currently, I'm expanding my skillset by pursuing a Data Analyst course, learning tools like Excel, SQL, and Python.
I enjoy building user-friendly web applications and analyzing data to uncover insights.
Eager to apply my skills in real-world projects and grow as a tech professional.            <br />
          </p>
        </div>
      </div>

      <div className="what-do flex-col">
        <div className="head2">
          <h2>What I Do!</h2>
        </div>
        <div className="row">
          <div className="col col-1">
            <div className="icon">
              <IoCodeSlashSharp />
            </div>
            <div className="jasd flx-col">
              <div className="col-heading">
                <h3>Fontend (React)</h3>
              </div>
              <div className="col-text">
                <p>
                  I build dynamic and responsive user interfaces using React.js, focusing on component-based architecture, state management, and clean UI/UX.
                </p>
              </div>
            </div>
          </div>

          <div className="col col-2">
            <div className="icon">
              <IoCodeSlashSharp />
            </div>
            <div className="jasd flx-col">
              <div className="col-heading">
                <h3>Backend (Node+Express)</h3>
              </div>
              <div className="col-text">
                <p>
                I create scalable and secure server-side applications using Node.js and Express, handling RESTful APIs, routing, and integration with MongoDB.
                </p>
              </div>
            </div>
          </div>

          <div className="col col-3">
            <div className="icon">
              <IoCodeSlashSharp />
            </div>
            <div className="jasd flx-col">
              <div className="col-heading">
                <h3>Full-Stack Web Development (MERN)</h3>
              </div>
              <div className="col-text">
                <p>
                 I develop complete MERN stack applications, combining MongoDB, Express, React, and Node.js to deliver end-to-end solutions from frontend to backend.
                </p>
              </div>
            </div>
          </div>

          <div className="col col-4">
            <div className="icon">
              <IoCodeSlashSharp />
            </div>
            <div className="jasd flx-col">
              <div className="col-heading">
                <h3>Data Analysis (Learning)</h3>
              </div>
              <div className="col-text">
                <p>
                  Currently learning data analysis tools and techniques like Python, Excel, SQL, and data visualization to extract insights and make data-driven decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
      </>
  );
}

export default About;
