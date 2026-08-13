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
About Me

I’m a Data Analyst / MIS Professional with hands-on experience in Excel, SQL, Power BI, and data reporting. I enjoy working with data, cleaning and organizing information, creating meaningful reports, and turning raw data into actionable insights.

I have experience in operational reporting, data verification, Excel-based tracking, and dashboard development. 

<br></br>
I’m continuously improving my skills in SQL, Power BI, DAX, Excel, and data analysis while building real-world projects to strengthen my analytical and problem-solving abilities.

My goal is to grow as a **Data Analyst / Business Intelligence professional** and help organizations make better decisions through accurate and insightful data.
          <br />
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
                <h3>MIS REPORTING</h3>
              </div>
              <div className="col-text">
                <p>
I create and maintain MIS reports using Microsoft Excel, ensuring accurate data tracking, reporting, and timely delivery of business information.                </p>
              </div>
            </div>
          </div>

          <div className="col col-2">
            <div className="icon">
              <IoCodeSlashSharp />
            </div>
            <div className="jasd flx-col">
              <div className="col-heading">
                <h3>Data Analysis</h3>
              </div>
              <div className="col-text">
                <p>
I analyze and organize data using Excel, SQL, and Power BI to identify trends, monitor performance, and generate actionable insights.2                </p>
              </div>
            </div>
          </div>

          <div className="col col-3">
            <div className="icon">
              <IoCodeSlashSharp />
            </div>
            <div className="jasd flx-col">
              <div className="col-heading">
                <h3>Data Management</h3>
              </div>
              <div className="col-text">
                <p>
I handle data cleaning, validation, reconciliation, and tracking, ensuring reports and datasets are accurate, consistent, and reliable.                </p>
              </div>
            </div>
          </div>

          <div className="col col-4">
            <div className="icon">
              <IoCodeSlashSharp />
            </div>
            <div className="jasd flx-col">
              <div className="col-heading">
                <h3>Dashboard & Visualization</h3>
              </div>
              <div className="col-text">
                <p>
                  I build interactive Power BI dashboards and Excel reports to track KPIs, visualize business performance, and support data-driven decision-making.                
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
