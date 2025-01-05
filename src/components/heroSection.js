import Boss from "../images/heroImage/Boss.jpg";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import {SocialMediaIcons} from "../images/IconPictures/socialIcons";
import MoreAboutMeButton from "../components/buttons/Aboutme"


const Hero = () => {
    const textRef = useRef(null); // Ref for "Hello, it's me..." typed text
    // const designRef = useRef(null); // Ref for "I am a..." typed text

    useEffect(() => {
        // Initialize Typed.js for "Hello, it's me..."
        const typed1 = new Typed(textRef.current, {
            strings: ["Frontend Developer", "Web Developer"], // Strings for the first span
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true,
        });

        
        // Cleanup Typed.js instances
        return () => {
            typed1.destroy();
        
        };
    }, []);

    return (
        <section>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 mt-10">
                    {/* Left Section */}
                    <div className="lg:ml-auto lg:mt-24 sm:mt-16">
                        <h2 className="sm:text-xs md:text-xl lg:text-2xl font-semibold">
                            Hello, it's me
                        </h2>
                        <h1 className="sm:text-xs md:text-3xl lg:text-4xl font-bold">
                            Muoghalu Ijeoma Florence
                        </h1>
                        <h2  className="sm:text-xs md:text-xl lg:text-2xl font-semibold lg:mt-2">
                            I am a <span ref={textRef}></span>
                        </h2>

                        <p>
                            I am a Fullstack developer with two years of experience,<br />
                            expertise in creating and designing websites, frontend design, and much more...
                        </p>
                    <div>

              <SocialMediaIcons />
                    </div>
                    <div>

              <MoreAboutMeButton/>
                    </div>

              

            
                        </div>

                    {/* Right Section */}
                    <div className="mt-10 flex lg:justify-center">
                        <img
                            src={Boss}
                            alt="Description"
                            className="lg:w-96 h-auto rounded-lg shadow-md sm:w-72"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
