import React from 'react';
import './WorkPage.css'; 
import Footer from '../components/Footer';
import MERNProject from '../components/MERNProjectComponent';
import DAProjectComponent from '../components/DAProjectComponent';
import { MERN_WORK, DA_WORK } from '../Data/work/work';
import { ThemeContext } from "../App";
import { useContext } from 'react';

function WorkPage() {
  const { theme } = useContext(ThemeContext);

  return (
      <div className={`work-section ${theme && "dark-work-section"}`} id="work">
        <div className="work-me">
          <div className="heading">
            <h1>Work</h1>
          </div>
          <div className="development">
            <div className="work-intro">
              <h3>MERN Projects</h3>
              <p>
                💻 Built multiple full-stack web applications using the MERN stack (MongoDB, Express, React, Node.js) with features like authentication, CRUD operations, and responsive UI.
<br />🚀 Focused on clean architecture (MVC pattern) and seamless frontend-backend integration to deliver efficient and user-friendly web solutions.
              </p>
            </div>
  
            <div className="work-container">
              <div className="work-area flex rg-4 flex-wrap">
                {MERN_WORK.map((work) => (
                  <MERNProject key={work.id} mern_work={work} />
                ))}
              </div>
            </div>
  
            <div className="DA">
              <div className="work-intro">
                <h3>Data Analysis Projects</h3>
                <p>
                  📊 Worked on multiple Data Analysis projects involving data cleaning, visualization, and insight generation using Excel, Power BI, and Python (Pandas, NumPy).
<br />📈 Focused on turning raw data into actionable insights through dashboards, statistical analysis, and business-driven data storytelling.
                </p>
              </div>
            </div>

            <div className="work-container">
                <div className="work-area flex rg-4 flex-wrap">
                    {DA_WORK.map((da_project) => (
                        <DAProjectComponent key={da_project.id} da_project={da_project} />
                    ))}
                </div>
            </div>  
          </div>
  
          <Footer />
        </div>
      </div>
    );
}

export default WorkPage
