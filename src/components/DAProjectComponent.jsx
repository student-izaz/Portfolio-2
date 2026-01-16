import React from 'react';
import { FaGithub } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";

function DAProjectComponent({ da_project }) {
  return (
    <div className="work-sample flex-col rg-2">
      <div className="work-img">
        <img src={da_project.project_img} alt="Work_Img" />
      </div>
      <div className="about-work">
        <div className="work-title">
          <h3>{da_project.project_name}</h3>
        </div>
        <div className="work-desc">
          <p>
            {da_project.project_description}
          </p>
        </div>
        <div className="work-tech">
          {da_project.tags.map((tag, index) => (
            <div className="tech" key={index}>{tag}</div>
          ))}
        </div>
        <div className="work-link">
          <a href={da_project.github_link}>
            <FaGithub /> <p>View on Github</p>
          </a>
          <a href={da_project.live_link}><IoIosLink />
          <p>Live Preview</p></a>
        </div>
      </div>
    </div>
  )
}

export default DAProjectComponent;
