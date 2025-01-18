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
import { CreativityCircleImage } from "../images/professionalCircle";
import { CommunicationCircleImage } from "../images/professionalCircle";
import { ProblemSolvingCircleImage } from "../images/professionalCircle";
import { TeamWorkCircleImage } from "../images/professionalCircle";

const MySkillsSection = () => {
  return (
    <>
      <section id="skills" style={{ padding: "1rem" }}>
        <div className="container mx-auto">
          <header
            className="w-full text-center text-white mt-16 mt-custom-sm"
            style={{ padding: "1rem" }}>
            <h1 className="text-3xl font-bold md:mt-24">
              My <span>Skills</span>
            </h1>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-11">
            <div>
              <h1 className="underline underline-offset-[10px] text-xl font-semibold md:mt-10  md:mb-16 sm:mb-11 center-text">
                Technical Skills
              </h1>

              <div className="bars mt-12 sm:mt-4 mb-10">
                <div className="text-white flex items-center gap-2">
                  <HtmlIcon />
                  <span>HTML</span>
                </div>
                <div class="relative flex items-center my-2">
                  <div class="h-1 bg-gray-500 w-0 animate-fillGray"></div>
                  <div class="h-1 bg-[#0eff] absolute top-0 left-0 w-0 animate-fillGreen">
                    <div class="absolute top-[-1.5rem] left-[97%] opacity-0 text-xs text-[#fff] animate-fadeIn">
                      90%
                    </div>
                  </div>
                </div>
              </div>

              <div className="bars mb-10">
                <div className="text-white flex items-center gap-2">
                  <CssIcon /> {/* Icon */}
                  <span>CSS</span> {/* Text */}
                </div>
                <div className="relative flex items-center my-2">
                  {/* Gray bar */}
                  <div className="h-1 bg-gray-500 w-full animate-fillGray"></div>

                  {/* Green bar */}
                  <div className="h-1 bg-[#0eff] absolute top-0 left-0 w-0 animate-fillGreen">
                    <div className="absolute top-[-1.5rem] left-[97%] opacity-0 text-xs text-[#fff] animate-fadeIn">
                      90%
                    </div>
                  </div>
                </div>
              </div>

              <div className="bars mb-10">
                <div className="info text-white flex items-center gap-2">
                  <TailwindCssIcon /> {/* Icon */}
                  <span>Tailwind CSS</span> {/* Text */}
                </div>
                <div className="relative flex items-center my-2">
                  {/* Gray bar */}
                  <div className="h-1 bg-gray-500 w-full animate-fillGray"></div>

                  {/* Green bar */}
                  <div className="h-1 bg-[#0eff] absolute top-0 left-0 w-0 animate-fillgreen">
                    <div className="absolute top-[-1.5rem] left-[97%] opacity-0 text-xs text-[#fff] animate-fadeIn">
                      70%
                    </div>
                  </div>
                </div>
              </div>

              <div className="bars mb-10">
                <div className="info text-white flex items-center gap-2">
                  <ReactjsIcon /> {/* Icon */}
                  <span>React Js</span> {/* Text */}
                </div>
                <div className="relative flex items-center my-2">
                  {/* Gray bar */}
                  <div className="h-1 bg-gray-500 w-full animate-fillGray"></div>

                  {/* Green bar */}
                  <div className="h-1 bg-[#0eff] absolute top-0 left-0 w-0 animate-filGreen">
                    <div className="absolute top-[-1.5rem] left-[97%] opacity-0 text-xs text-[#fff] animate-fadeIn">
                      80%
                    </div>
                  </div>
                </div>
              </div>

              <div className="bars mb-10">
                <div className="info text-white flex items-center gap-2">
                  <BootstrapIcon /> {/* Icon */}
                  <span>Bootstrap</span> {/* Text */}
                </div>
                <div className="relative flex items-center my-2">
                  {/* Gray bar */}
                  <div className="h-1 bg-gray-500 w-full animate-fillGray"></div>

                  {/* Green bar */}
                  <div className="h-1 bg-[#0eff] absolute top-0 left-0 w-0 animate-fillGreen">
                    <div className="absolute top-[-1.5rem] left-[97%] opacity-0 text-xs text-[#fff] animate-fadeIn">
                      90%
                    </div>
                  </div>
                </div>
              </div>

              <div className="bars mb-10">
                <div className="info text-white flex items-center gap-2">
                  <NextjsIcon /> {/* Icon */}
                  <span>Next Js</span> {/* Text */}
                </div>
                <div className="relative flex items-center my-2">
                  {/* Gray bar */}
                  <div className="h-1 bg-gray-500 w-full animate-fillGray"></div>

                  {/* Green bar */}
                  <div className="h-1 bg-[#0eff] absolute top-0 left-0 w-0 animate-fillgreen">
                    <div className="absolute top-[-1.5rem] left-[97%] opacity-0 text-xs text-[#fff] animate-fadeIn">
                      70%
                    </div>
                  </div>
                </div>
              </div>

              <div className="bars mb-10">
                <div className="info text-white flex items-center gap-2">
                  <NodeExpressIcon /> {/* Icon */}
                  <span>Node / Express js</span> {/* Text */}
                </div>
                <div className="relative flex items-center my-2">
                  {/* Gray bar */}
                  <div className="h-1 bg-gray-500 w-full animate-fillGray"></div>

                  {/* Green bar */}
                  <div className="h-1 bg-[#0eff] absolute top-0 left-0 w-0 animate-fillInGreen">
                    <div className="absolute top-[-1.5rem] left-[97%] opacity-0 text-xs text-[#fff] animate-fadeIn">
                      50%
                    </div>
                  </div>
                </div>
              </div>

              <div className="bars mb-10">
                <div className="info text-white flex items-center gap-2">
                  <SassIcon /> {/* Icon */}
                  <span>SASS</span> {/* Text */}
                </div>
                <div className="relative flex items-center my-2">
                  {/* Gray bar */}
                  <div className="h-1 bg-gray-500 w-full animate-fillGray"></div>

                  {/* Green bar */}
                  <div className="h-1 bg-[#0eff] absolute top-0 left-0 w-0 animate-fillYGreen">
                    <div className="absolute top-[-1.5rem] left-[97%] opacity-0 text-xs text-[#fff] animate-fadeIn">
                      65%
                    </div>
                  </div>
                </div>
              </div>

              <div className="bars mb-10">
                <div className="info text-white flex items-center gap-2">
                  <MySqlIcon /> {/* Icon */}
                  <span>MySql</span> {/* Text */}
                </div>
                <div className="relative flex items-center my-2">
                  {/* Gray bar */}
                  <div className="h-1 bg-gray-500 w-full sm:w-[80%]  animate-fillGray"></div>

                  {/* Green bar */}
                  <div className="h-1 bg-[#0eff] absolute top-0 left-0 w-0 animate-fillInGreen">
                    <div className="absolute top-[-1.5rem] left-[97%] opacity-0 text-xs text-[#fff] animate-fadeIn">
                      50%
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h1 className="underline whitespace-nowrap underline-offset-[10px] text-xl font-semibold mb-10 md:mx-40 text-center">
                Professional Skills
              </h1>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-9 md:gap-3 mt-12 mx-auto">
                <div className="flex justify-center items-center col-span-1 md:ml-20">
                  <CreativityCircleImage />
                </div>
                <div className="flex justify-center items-center col-span-1 md:mr-20">
                  <CommunicationCircleImage />
                </div>
                <div className="flex justify-center items-center col-span-1 md:ml-20">
                  <ProblemSolvingCircleImage />
                </div>
                <div className="flex justify-center items-center col-span-1 md:mr-20">
                  <TeamWorkCircleImage />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MySkillsSection;
