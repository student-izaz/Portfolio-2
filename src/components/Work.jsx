import React, { useContext } from "react";
import "./Work.css";
import Footer from "./Footer";
import { ThemeContext } from "../App";
import { FaGithub } from "react-icons/fa";

function Work() {
  const Theme = useContext(ThemeContext);

  return (
    <div className={`work-section ${Theme && "dark-work-section"}`}>
      <div className="work-me">
        <div className="heading">
          <h1>Work</h1>
        </div>
        <div className="work-container">
          <div className="work-area flex rg-4 flex-wrap">
            <div className="work-sample flex-col rg-2">
              <div className="work-img">
                <img src="public/work-sample-1.png" />
              </div>
              <div className="about-work">
              <div className="work-title"><h3>MERN Grocery App</h3></div>
              <div className="work-desc">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, accusamus.</p>
              </div>
              <div className="work-tech">
                <div className="tech">React</div>
                <div className="tech">React</div>
                <div className="tech">React</div>
              </div>
              <div className="work-link">
                <a href="#"><FaGithub /> View on Github</a>
              </div>
              </div>
            </div>
            <div className="work-sample flex-col rg-2">
            <div className="work-img">
                <img src="public/work-sample-2.png" />
              </div>
              <div className="about-work">
              <div className="work-title"><h3>MERN Grocery App</h3></div>
              <div className="work-desc">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, accusamus.</p>
              </div>
              <div className="work-tech">
                <div className="tech">React</div>
                <div className="tech">React</div>
                <div className="tech">React</div>
              </div>
              <div className="work-link">
                <a href="#"><FaGithub /> View on Github</a>
              </div>
              </div>
            </div>
            <div className="work-sample flex-col rg-2">
            <div className="work-img">
                <img src="public/work-sample-3.png" />
              </div>
              <div className="about-work">
              <div className="work-title"><h3>E-commerce Platform</h3></div>
              <div className="work-desc">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, accusamus.</p>
              </div>
              <div className="work-tech">
                <div className="tech">React</div>
                <div className="tech">React</div>
                <div className="tech">React</div>
              </div>
              <div className="work-link">
                <a href="#"><FaGithub /> View on Github</a>
              </div>
              </div>
            </div>
            <div className="work-sample flex-col rg-2">
            <div className="work-img">
                <img src="public/work-sample-4.png" />
              </div>
              <div className="about-work">
              <div className="work-title"><h3>MERN Grocery App</h3></div>
              <div className="work-desc">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, accusamus.</p>
              </div>
              <div className="work-tech">
                <div className="tech">React</div>
                <div className="tech">React</div>
                <div className="tech">React</div>
              </div>
              <div className="work-link">
                <a href="#"><FaGithub /> View on Github</a>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Work;
