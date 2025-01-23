/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Transition from "../../components/transition/Transition";
import ProjectImg1 from "../../assets/work/img6.jpg";
import ProjectImg2 from "../../assets/work/img5.jpg";
import ProjectImg3 from "../../assets/work/img4.jpg";
import ProjectImg4 from "../../assets/work/img3.jpg";
import ProjectImg5 from "../../assets/work/img2.jpg";
import ProjectImg6 from "../../assets/work/img1.jpg";
import { gsap } from "gsap";

import "./project.css";

const Project = () => {
  useEffect(() => {
    gsap.set(["h1", "p"], {
      y: 50,
      opacity: 0,
    });

    gsap.set(".img", {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    });

    setTimeout(() => {
      gsap.to(["h1", "p"], {
        y: 0,
        opacity: 1,
        stagger: 0.075,
        duration: 1,
        ease: "power3.out",
      });

      gsap.to(".img", {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        duration: 1,
        ease: "power4.inOut",
      });
    }, 500);
  }, []);

  return (
    <>
      <div className="project">
        <div className="project-intro">
          <h1>
            [Project Title: Replace this with your project name, e.g., 'Harmony']
          </h1>
        </div>

        <div className="project-data">
          <div className="project-info">
            <p className="copy-header">About</p>
            <p>
              [Write a short description of the project. Include what the project
              is about, technologies used, and its purpose.]
            </p>

            <p>
              [Add more context about the project. This section is optional but
              can provide detailed insights into its functionality or goals.]
            </p>

            <br />

            <p className="copy-header">Details</p>
            <ul>
              <li>
                <p>• [Key Feature 1: Replace with specific feature]</p>
              </li>
              <li>
                <p>• [Key Feature 2: Replace with specific feature]</p>
              </li>
              <li>
                <p>• [Key Feature 3: Replace with specific feature]</p>
              </li>
            </ul>

            <br />

            <p className="link">
              <Link to="/">[Live Demo Link: Replace this with a real link]</Link>
            </p>
          </div>

          <div className="project-images">
            <div className="img">
              <img src={ProjectImg1} alt="[Replace with alt text for image]" />
            </div>
            <div className="img">
              <img src={ProjectImg2} alt="[Replace with alt text for image]" />
            </div>
            <div className="img">
              <img src={ProjectImg3} alt="[Replace with alt text for image]" />
            </div>
            <div className="img">
              <img src={ProjectImg4} alt="[Replace with alt text for image]" />
            </div>
            <div className="img">
              <img src={ProjectImg5} alt="[Replace with alt text for image]" />
            </div>
            <div className="img">
              <img src={ProjectImg6} alt="[Replace with alt text for image]" />
            </div>
          </div>
        </div>
      </div>

      <div className="project-nav">
        <div className="nav-prev">
          <p>
            <span>Previous</span> [Replace with Previous Project Title]
          </p>
          <h1>
            <Link to="/">Previous</Link>
          </h1>
        </div>
        <div className="nav-next">
          <p>
            <span>Next</span> [Replace with Next Project Title]
          </p>
          <h1>
            <Link to="/">Next</Link>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Transition(Project);
