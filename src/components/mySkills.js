import React from "react";
import { NextjsIcon } from "../images/IconPictures/skillIcon";
import { HtmlIcon } from "../images/IconPictures/skillIcon";
import { CssIcon } from "../images/IconPictures/skillIcon";
import { TailwindCssIcon } from "../images/IconPictures/skillIcon";
import { ReactjsIcon } from "../images/IconPictures/skillIcon";
import { BootstrapIcon } from "../images/IconPictures/skillIcon";
import { SassIcon } from "../images/IconPictures/skillIcon";
import { MySqlIcon } from "../images/IconPictures/skillIcon";
import { NodeExpressIcon } from "../images/IconPictures/skillIcon";

const MySkills = () => {
  return (
    <>
      <section className="" id="skills">
        <div className="container mx-auto">
          <header className="w-full text-center text-white mt-16 mt-custom-sm">
            <h1 className="text-3xl font-bold mt-24">
              My <span>Skills</span>
            </h1>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="Technical-Bars">
              <h1 className="heading1 text-xl font-semibold mt-10">
                Technical Skills
              </h1>
              <div className="bars">
                <HtmlIcon />
                <div className="info text-white">
                  <span>HTML</span>
                </div>
                <div className="progress-line html">
                  <span></span>
                </div>
              </div>
              <div className="bars">
                {" "}
                <CssIcon />
                <div className="info text-white">
                  <span>CSS</span>
                </div>
                <div className="progress-line css">
                  <span></span>
                </div>
              </div>
              <div className="bars">
                <TailwindCssIcon />
                <div className="info text-white">
                  <span>Tailwind CSS</span>
                </div>
                <div className="progress-line tailwindcss">
                  <span></span>
                </div>
              </div>
              <div className="bars">
                <ReactjsIcon />
                <div className="info text-white">
                  <span>React Js</span>
                </div>
                <div className="progress-line reactjs">
                  <span></span>
                </div>
              </div>
              <div className="bars">
                <NextjsIcon />
                <div className="info text-white">
                  <span>Next Js</span>
                </div>
                <div className="progress-line nextjs">
                  <span></span>
                </div>
              </div>
              <div className="bars">
                {" "}
                <BootstrapIcon />
                <div className="info text-white">
                  <span>Bootstrap</span>
                </div>
                <div className="progress-line bootstrap">
                  <span></span>
                </div>
              </div>
              <div className="bars">
                <MySqlIcon />
                <div className="info text-white">
                  <span>MySQL</span>
                </div>
                <div className="progress-line HTML">
                  <span></span>
                </div>
              </div>
              <div className="bars">
                {" "}
                <NodeExpressIcon />
                <div className="info text-white">
                  <span>Node.js / Express</span>
                </div>
                <div className="progress-line HTML">
                  <span></span>
                </div>
              </div>
              <div className="bars">
                {" "}
                <SassIcon />
                <div className="info text-white">
                  <span>SASS</span>
                </div>
                <div className="progress-line HTML">
                  <span></span>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h1 className="heading1 text-xl font-semibold">
                Professional Skills
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MySkills;
