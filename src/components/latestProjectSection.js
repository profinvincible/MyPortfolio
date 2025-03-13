import React from "react";
import blog from "../images/MyProjectsPictues/blog.jpg";
import miniBankApp from "../images/MyProjectsPictues/miniBankApp.jpg";
import UIUXDESIGNIMAGE from "../images/MyProjectsPictues/UIUXDESIGNIMAGE.jpg";
import calculator from "../images/MyProjectsPictues/calculator.jpg";
import weatherAppPicture from "../images/MyProjectsPictues/weatherAppPicture.jpg";
import marketStation from "../images/MyProjectsPictues/marketStation.png";
import EighthGear from "../images/MyProjectsPictues/8thGear.jpg";

const LatestProject = () => {
  return (
    <>
      <section id="projects" style={{ padding: "1rem" }}>
        <div className="container mx-auto">
          <header className="w-full text-center text-white mt-16 mt-custom-sm">
            <h1 className="text-3xl font-bold md:mt-24">
              Latest<span className="text-[#0eff]">Projects</span>
            </h1>
          </header>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mt-11 mb-10 projectList">
            <div className="relative group overflow-hidden">
              <a
                href="https://www.8thgearpartners.com/"
                target="_blank"
                rel="noopener noreferrer">
                <img
                  src={EighthGear}
                  alt="Description"
                  className="md:h-[210px] h-[106px] w-full object-cover"
                />
                <div
                  className="absolute inset-0 flex items-center justify-center bg-[rgba(0,239,255,0.5)] opacity-0 group-hover:opacity-100 
      group-hover:translate-y-0 translate-y-full transition-transform duration-500 ease-in-out">
                  <p className="text-2xl font-bold text-white">8thGear Hub</p>
                </div>
              </a>
            </div>

            <div className="relative group overflow-hidden">
              <a
                href="https://market-station-brown.vercel.app/"
                target="_blank"
                rel="noopener noreferrer">
                <img
                  src={marketStation}
                  alt="Description"
                  className="md:h-[210px] h-[106px] w-full object-cover"
                />
                <div
                  className="absolute inset-0 flex items-center justify-center bg-[rgba(0,239,255,0.5)] opacity-0 group-hover:opacity-100 
      group-hover:translate-y-0 translate-y-full transition-transform duration-500 ease-in-out">
                  <p className="text-2xl font-bold text-white">
                    Market Station
                  </p>
                </div>
              </a>
            </div>

            <div className="relative group overflow-hidden">
              <a
                href="https://mini-calculator-mu.vercel.app/"
                target="_blank"
                rel="noopener noreferrer">
                <img
                  src={calculator}
                  alt="Description"
                  className="md:h-[210px] h-[106px]"
                />
                <div
                  className="absolute inset-0 flex items-center justify-center bg-[rgba(0,239,255,0.5)] opacity-0 group-hover:opacity-100 
      group-hover:translate-y-0 translate-y-full transition-transform duration-500 ease-in-out">
                  <p className="text-2xl font-bold text-white">
                    My Web Calculator
                  </p>
                </div>
              </a>
            </div>

            <div className="relative group overflow-hidden">
              <a
                href="https://my-blog-fullstack-nvqw.vercel.app/"
                target="_blank"
                rel="noopener noreferrer">
                <img src={blog} alt="Description" />
                <div
                  className="absolute inset-0 flex items-center justify-center bg-[rgba(0,239,255,0.5)] opacity-0 group-hover:opacity-100 
      group-hover:translate-y-0 translate-y-full transition-transform duration-500 ease-in-out">
                  <p className="text-2xl font-bold text-white">My MiniBlog</p>
                </div>
              </a>
            </div>

            <div className="relative group overflow-hidden">
              <a
                href="https://drive.google.com/file/d/1tpj50sK4XzBO95tglF691BHtBAunT5gj/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer">
                <img src={weatherAppPicture} alt="Description" />
                <div
                  className="absolute inset-0 flex items-center justify-center bg-[rgba(0,239,255,0.5)] opacity-0 group-hover:opacity-100 
      group-hover:translate-y-0 translate-y-full transition-transform duration-500 ease-in-out">
                  <p className="text-2xl font-bold text-white">
                    Mini Weather App
                  </p>
                </div>
              </a>
            </div>

            <div className="relative group overflow-hidden">
              <a
                href="https://profinvincible.github.io/ASSIGNMENT/"
                target="_blank"
                rel="noopener noreferrer">
                <img src={miniBankApp} alt="Description" />
                <div
                  className="absolute inset-0 flex items-center justify-center bg-[rgba(0,239,255,0.5)] opacity-0 group-hover:opacity-100 
      group-hover:translate-y-0 translate-y-full transition-transform duration-500 ease-in-out">
                  <p className="text-2xl font-bold text-white">
                    Dormant Bank App
                  </p>
                </div>
              </a>
            </div>

            <div className="relative group overflow-hidden">
              <a
                href="https://www.figma.com/proto/mFVl2eFDV4W4IVhOEjOFl2/KoloVest?node-id=417-5"
                target="_blank"
                rel="noopener noreferrer">
                <img src={UIUXDESIGNIMAGE} alt="Description" />
                <div
                  className="absolute inset-0 flex items-center justify-center bg-[rgba(0,239,255,0.5)] opacity-0 group-hover:opacity-100 
      group-hover:translate-y-0 translate-y-full transition-transform duration-500 ease-in-out">
                  <p className="text-2xl font-bold text-white">UI/UX Design</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LatestProject;
