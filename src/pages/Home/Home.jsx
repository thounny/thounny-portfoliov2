/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import Transition from "../../components/transition/Transition";
import IntroImg from "../../assets/home/intro.jpg";
import { gsap } from "gsap";

import "./home.css";

const Home = () => {
  const splitHeader = (selector) => {
    let elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
      let text = element.innerText;
      let splitText = text
        .split("")
        .map(function (char) {
          return `<span>${char === " " ? "&nbsp;&nbsp;" : char}</span>`;
        })
        .join("");

      element.innerHTML = splitText;
    });
  };

  useEffect(() => {
    splitHeader(".header-1 h1");
    splitHeader(".header-2 h1");

    gsap.set("p", {
      y: 50,
      opacity: 0,
    });

    gsap.set(".intro-img", {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    });

    setTimeout(() => {
      gsap.to([".header-1 h1 span", ".header-2 h1 span"], {
        top: "0px",
        stagger: 0.015,
        duration: 0.5,
        ease: "power3.out",
      });

      gsap.to("p", {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 1,
        ease: "power3.out",
      });

      gsap.to(".intro-img", {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        duration: 1,
        ease: "power4.inOut",
        delay: 0.25,
      });
    }, 500);
  }, []);
  return (
    <>
      <div className="header">
        <div className="header-1">
          <h1>[Your Name Here]</h1>
        </div>
        <div className="header-2">
          <h1>[Your Role Here, e.g., 'Frontend Developer']</h1>
        </div>
      </div>
      <div className="intro">
        <div className="intro-col">
          <div className="intro-sub-col">
            <p className="intro-header">About</p>
            <p>[Replace this with a link to your About page or bio]</p>
            <br />
            <p className="intro-header">Contact</p>
            <p>[Replace this with your email address]</p>
          </div>
          <div className="intro-sub-col">
            <p className="intro-header">Social</p>
            <p>[Replace with your social link]</p>
            <p>[Replace with your social link]</p>
            <p>[Replace with your social link]</p>
          </div>
        </div>
        <div className="intro-col">
          <div className="intro-img">
            <img src={IntroImg} alt="[Your Name Here]" />
          </div>
          <div className="intro-about">
            <div className="intro-about-col">
              <p>
                [Write a short introduction about yourself. Highlight your skills, interests, and focus as a developer or designer.]
              </p>
            </div>
            <div className="intro-about-col">
              <p>
                [Add more details about your professional journey, expertise, and what you bring to the table.]
              </p>
            </div>
          </div>
          <div className="intro-data">
            <p className="intro-header">Clients</p>
            <p>
              [Replace this list with companies or organizations you've worked with, if applicable. Otherwise, leave it blank or add placeholders.]
            </p>

            <br />

            <p className="intro-header">[Current Role - Company Name]</p>
            <p>[Start Date - End Date]</p>

            <br />

            <p className="intro-header">[Previous Role - Company Name]</p>
            <p>[Start Date - End Date]</p>

            <br />

            <p className="intro-header">[Previous Role - Company Name]</p>
            <p>[Start Date - End Date]</p>

            <br />

            <p className="intro-header">Recognition</p>
            <p>[List any awards, recognitions, or features. Replace placeholders with real achievements.]</p>
            <p>[Example: Awwwards Site of the Day]</p>
            <p>[Example: CSS Design Awards]</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transition(Home);
