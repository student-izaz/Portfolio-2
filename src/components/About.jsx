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
            I'm Creative Director and UI/UX Designer from Sydney, Australia,
            working in web development and print media. I enjoy turning complex
            problems into simple, beautiful and intuitive designs.
            <br />
            <br />
            temporibus culpa dolorem molestias atque ipsam veritatis dolore at,
            provident perspiciatis velit nemo voluptatum dignissimos. Optio, aut
            quasi architecto consequuntur, praesentium asperiores, perspiciatis
            totam distinctio id eos quae tempore dignissimos inventore aliquam
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
                <h3>Web Development</h3>
              </div>
              <div className="col-text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                  adipisci voluptates dolor numquam consequatur nam, unde
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
                <h3>Web Development</h3>
              </div>
              <div className="col-text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                  adipisci voluptates dolor numquam consequatur nam, unde
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
                <h3>Web Development</h3>
              </div>
              <div className="col-text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                  adipisci voluptates dolor numquam consequatur nam, unde
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
                <h3>Web Development</h3>
              </div>
              <div className="col-text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                  adipisci voluptates dolor numquam consequatur nam, unde
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
