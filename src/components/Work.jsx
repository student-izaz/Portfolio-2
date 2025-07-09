import React, { useContext } from "react";
import "./Work.css";
import Footer from "./Footer";
import { ThemeContext } from "../App";
import { FaGithub } from "react-icons/fa";
import { assets } from "../assets/images";

function Work() {
  const Theme = useContext(ThemeContext);

  return (
    <div className={`work-section ${Theme && "dark-work-section"}`} id="work">
      <div className="work-me">
        <div className="heading">
          <h1>Work</h1>
        </div>
        <div className="work-container">
          <div className="work-area flex rg-4 flex-wrap">
            <div className="work-sample flex-col rg-2">
              <div className="work-img">
                <img src={assets.finance_tracker} alt="Work_Img" />
              </div>
              <div className="about-work">
                <div className="work-title"><h3>Finance Tracker MERN</h3></div>
                <div className="work-desc">
                  <p>E-commerce website with features like product listing, category filtering, user authentication, shopping cart.</p>
                </div>
                <div className="work-tech">
                  <div className="tech">React</div>
                  <div className="tech">MongoDB</div>
                  <div className="tech">Express</div>
                  <div className="tech">Redux</div>
                </div>
                <div className="work-link">
                  <a href="https://github.com/student-izaz/Project-Finance-Tracker.git"><FaGithub /> View on Github</a>
                  <a href="https://finance-tracker-eight-drab.vercel.app//"><FaGithub /> Live Preview</a>
                </div>
              </div>
            </div>

            <div className="work-sample flex-col rg-2">
              <div className="work-img">
                <img src={assets.begumsaab} alt="Work_Img" />
              </div>
              <div className="about-work">
                <div className="work-title"><h3>MERN Online Suits Booking App</h3></div>
                <div className="work-desc">
                  <p>E-commerce website with features like product listing, category filtering, user authentication, shopping cart.</p>
                </div>
                <div className="work-tech">
                  <div className="tech">React</div>
                  <div className="tech">MongoDB</div>
                  <div className="tech">Express</div>
                  <div className="tech">Redux</div>
                </div>
                <div className="work-link">
                  <a href="https://github.com/student-izaz/begumsaab.git"><FaGithub /> View on Github</a>
                  <a href="https://begumsaab.vercel.app/"><FaGithub /> Live Preview</a>
                </div>
              </div>
            </div>

            <div className="work-sample flex-col rg-2">
              <div className="work-img">
                <img src={assets.skillswapp} alt="Work_Img" />
              </div>
              <div className="about-work">
                <div className="work-title"><h3>SkillSwapp MERN</h3></div>
                <div className="work-desc">
                  <p>SkillSwap is a responsive web application that connects users who want to exchange skills rather than buy or sell them.</p>
                </div>
                <div className="work-tech">
                  <div className="tech">React</div>
                  <div className="tech">Node js</div>
                  <div className="tech">Express js</div>
                </div>
                <div className="work-link">
                  <a href="#"><FaGithub /> View on Github</a>
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

export default Work;
