import React, { useContext } from "react";
import "./Work.css";
import Footer from "./Footer";
import { ThemeContext } from "../App";

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
              <div className="work-link">
                <a href="#">Github Link</a>
              </div>
            </div>
            <div className="work-sample flex-col rg-2">
            <div className="work-img">
                <img src="public/work-sample-2.png" />
              </div>
              <div className="work-link">
                <a href="#">Github Link</a>
              </div>
            </div>
            <div className="work-sample flex-col rg-2">
            <div className="work-img">
                <img src="public/work-sample-3.png" />
              </div>
              <div className="work-link">
                <a href="#">Github Link</a>
              </div>
            </div>
            <div className="work-sample flex-col rg-2">
            <div className="work-img">
                <img src="public/work-sample-4.png" />
              </div>
              <div className="work-link">
                <a href="#">Github Link</a>
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
