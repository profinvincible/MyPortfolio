import React, { useEffect, useRef } from "react";
import Boss from "../images/heroImage/Boss.jpg";
import Typed from "typed.js";
import { SocialMediaIcons } from "../images/IconPictures/socialIcons";
import { MoreAboutMeButton } from "./buttons/allButtons";

const HeroSection = () => {
  const textRef = useRef(null);
  const animateRef = useRef(null); // Reference for the element to animate on scroll

  useEffect(() => {
    // Initialize Typed.js for text typing animation
    const typed1 = new Typed(textRef.current, {
      strings: ["Web Developer", "Frontend Developer", "Backend Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    // IntersectionObserver for detecting when the element is in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in-view"); // Add class when element is in view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );

    if (animateRef.current) {
      observer.observe(animateRef.current); // Start observing the target element
    }

    // Cleanup
    return () => {
      typed1.destroy();
      if (animateRef.current) {
        observer.unobserve(animateRef.current); // Clean up observer
      }
    };
  }, []);

  return (
    <section id="home">
      <div className="container mx-auto pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 mt-14">
          <div
            ref={animateRef} // Ref for the element to animate
            className="lg:ml-auto lg:mt-24 sm:mt-16 opacity-0">
            <h2 className="md:text-xl lg:text-2xl font-semibold text-custom-sm center-text">
              Hello, it's me
            </h2>
            <h1 className="sm:text-xs md:text-3xl lg:text-3xl font-semibold center-text">
              Muoghalu Ijeoma Florence
            </h1>
            <h2 className="sm:text-xs md:text-xl lg:text-2xl font-semibold lg:mt-2 text-custom-sm">
              I am a <span ref={textRef}></span>
            </h2>
            <p className="center-text">
              I am a Fullstack developer with two years of experience,
              <br />
              expertise in creating and designing websites, frontend design, and
              much more...
            </p>

            <div className="center-icons">
              <SocialMediaIcons />
            </div>
            <div className="center-text">
              <MoreAboutMeButton />
            </div>
          </div>

          <div className="mt-10 flex justify-center lg:justify-center">
            <img
              src={Boss}
              alt="Description"
              className="w-full max-w-sm lg:w-96 h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
