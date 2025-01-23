/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import workItems from "./items";
import { IoMdArrowBack } from "react-icons/io";
import { gsap } from "gsap";

import Transition from "../../components/transition/Transition"; // Import Transition HOC
import "./work.css";

const Work = () => {
  const carouselRef = useRef(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  const handleHeaderClick = (event) => {
    event.stopPropagation();
    navigate("/project");
  };

  const splitHeader = (headerElement, text) => {
    // Clear all existing spans
    headerElement.innerHTML = "";

    // Split the new text into spans
    const splitText = text
      .split("")
      .map((char) => `<span>${char === " " ? "&nbsp;" : char}</span>`)
      .join("");

    headerElement.innerHTML = splitText;
  };

  const addNewSlide = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    const nextSlideIndex = (slideIndex + 1) % workItems.length;
    const newSlide = workItems[nextSlideIndex];

    // Target header, image, and slide info elements
    const currentHeader = document.querySelector(".slide-content-header h1");
    const currentImage = document.querySelector(".slide-img img");

    if (currentHeader && currentImage) {
      // Update header text with spans
      splitHeader(currentHeader, newSlide.workName);

      // Animate image replacement
      gsap.to(currentImage, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          currentImage.src = newSlide.workImg;
          gsap.to(currentImage, { opacity: 1, duration: 0.5 });
        },
      });

      // Update client, role, and type text
      const workClient = document.querySelector("#work-client");
      const workRole = document.querySelector("#work-role");
      const workType = document.querySelector("#work-type");

      gsap.to([workClient, workRole, workType], {
        opacity: 0,
        x: 15,
        duration: 0.3,
        stagger: 0.1,
        onComplete: () => {
          workClient.textContent = newSlide.workClient;
          workRole.textContent = newSlide.workRole;
          workType.textContent = newSlide.workType;

          gsap.to([workClient, workRole, workType], {
            opacity: 1,
            x: 0,
            duration: 0.3,
            stagger: 0.1,
            delay: 0.3,
          });
        },
      });

      // Animate new header spans
      const letters = currentHeader.querySelectorAll("span");
      gsap.set(letters, { top: "100px" });
      gsap.to(letters, {
        top: "0px",
        duration: 0.5,
        ease: "power2.out",
        delay: 0.35,
        stagger: 0.075,
      });

      // Update slide index
      setSlideIndex(nextSlideIndex);

      // Reset animation flag after a delay
      setTimeout(() => setIsAnimating(false), 1000);
    }
  };

  useEffect(() => {
    const handleClick = (event) => {
      // Prevent triggering if the menu button or other excluded elements are clicked
      const menuButton = document.querySelector(".menu"); // Adjust selector based on your actual menu button class or ID
      const isClickInsideMenu = menuButton && menuButton.contains(event.target);

      if (!isAnimating && !isClickInsideMenu) {
        addNewSlide();
      }
    };

    const nextBtn = document.querySelector(".next-btn");
    document.addEventListener("click", handleClick);
    nextBtn.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
      nextBtn.removeEventListener("click", handleClick);
    };
  }, [isAnimating]);


  return (
    <>
      <div className="back-btn">
        <IoMdArrowBack /> <Link to="/">Back</Link>
      </div>
      <div className="work-carousel" ref={carouselRef}>
        <div className="slide">
          <div className="slide-img">
            <img src={workItems[0].workImg} alt={workItems[0].workName} />
          </div>
          <div
            className="slide-content"
            style={{ backgroundColor: workItems[0].bgColor }}
          >
            <div className="slide-content-header">
              <h1 onClick={handleHeaderClick}>{workItems[0].workName}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="slide-info">
        <div className="slide-info-row">
          <p>With</p>
          <p id="work-client">{workItems[0].workClient}</p>
        </div>
        <div className="slide-info-row">
          <p>Role</p>
          <p id="work-role">{workItems[0].workRole}</p>
        </div>
        <div className="slide-info-row">
          <p>Type</p>
          <p id="work-type">{workItems[0].workType}</p>
        </div>
      </div>
      <div className="slide-index">
        <p>{slideIndex + 1}</p>
        <p>/</p>
        <p>{workItems.length}</p>
      </div>
      <div className="next-btn">
        <p>Next</p>
      </div>
    </>
  );
};

// Wrap Work component with Transition HOC
export default Transition(Work);
