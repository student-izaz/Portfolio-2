import React from "react";
import "./Work.css";
import { FaGithub } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";

function MERNProject({ mern_work }) {

  return (
    <div className="work-sample flex-col rg-2">
      <div className="work-img">
        <img src={mern_work.project_img} alt="Work_Img" />
      </div>
      <div className="about-work">
        <div className="work-title">
          <h3>{mern_work.project_name}</h3>
        </div>
        <div className="work-desc">
          <p>
            {mern_work.project_description}
          </p>
        </div>
        <div className="work-tech">
          <div className="tech">React</div>
          <div className="tech">Node js</div>
          <div className="tech">Express js</div>
        </div>
        <div className="work-link">
          <a href={mern_work.github_link}>
            <FaGithub /> <p>View on Github</p>
          </a>
          <a href={mern_work.live_link}><IoIosLink />
          <p>Live Preview</p></a>
        </div>
      </div>
    </div>
  );
}

export default MERNProject;
