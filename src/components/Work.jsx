import React, { useContext } from "react";
import "./Work.css";
import Footer from "./Footer";
import { ThemeContext } from "../App";
import { FaGithub } from "react-icons/fa";
import { assets } from "../assets/images";

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
                <img src={assets.grocery_img} alt="Work_Img"/>
              </div>
              <div className="about-work">
              <div className="work-title"><h3>MERN Grocery App</h3></div>
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
                <a href="#"><FaGithub /> View on Github</a>
              </div>
              </div>
            </div>
            <div className="work-sample flex-col rg-2">
            <div className="work-img">
                <img src={assets.techpile_img} alt="Work_Img" />
              </div>
              <div className="about-work">
              <div className="work-title"><h3>MERN Grocery App</h3></div>
              <div className="work-desc">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, accusamus.</p>
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
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Work;
