import React from "react";
import Boss from "../images/heroImage/Boss.jpg";
import { MoreAboutMeButton } from "./buttons/allButtons";

const AboutMe = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="lg:ml-14 mt-11 order-last md:order-first sm:pb-20">
              <img
                src={Boss}
                alt="Description"
                className="w-full sm:w-48 md:w-60 h-auto rounded-lg shadow-md md:mt-24"
              />
            </div>
            <div className="md:mt-16 order-first md:order-last lg:ml-16">
              <h2 className="font-bold text-3xl center-text">
                About <span>Me</span>
              </h2>
              <h4 className="text-white text-xl font-semibold mt-5 center-text ">
                Full Stack Developer
              </h4>
              <p className=" leading-relaxed mt-5 mb-7 center-text">
                I am a self-motivated and passionate IT personnel with a keen
                interest in fullstack web development. I am proficient in wring
                HTML, CSS, tailwind, SASS, Gits & Github, Figma, and Bootstrap.
                Experienced in database management with MySql. Able to design
                and implement responsive user interfaces, ensuring seamless user
                experiences. Strong problem-solving and collaboration abilities,
                dedicated to delivering high-quality code and meeting project
                deadlines. Continuously learning and adapting to the latest
                industry trends to deliver cutting-edge solutions.
              </p>

              {/* Button placed after text on small screens */}
              <div className="mt-6 order-last md:order-first center-text">
                <MoreAboutMeButton />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
