import React from "react";
import { UX } from "../images/IconPictures/serviceIcons";
import { Webdesign } from "../images/IconPictures/serviceIcons";
import { Github } from "../images/IconPictures/serviceIcons";
import { LearnMore } from "../components/buttons/allButtons";

const ServiceSection = () => {
  return (
    <>
      <section className="services" id="services">
        <div className="container mx-auto">
          <header className="w-full text-center text-white mt-16 mt-custom-sm">
            <h1 className="text-3xl font-bold mt-24">
              My <span>Services</span>
            </h1>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14 center-text serviceList">
            <div>
              <UX />
              <h2 className="mt-5 text-xl">UI/UX Design</h2>
              <p className="mt-3">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                convallis quam ac nisl tincidunt, at dapibus libero condimentum.
                Fusce tempus lacus sit amet mauris tincidunt, nec tristique ante
                dictum. Sed ac justo vitae enim varius fringilla.
              </p>
              <LearnMore />
            </div>
            <div>
              <Webdesign />
              <h2 className="mt-5 text-xl">Web Design</h2>
              <p className="mt-3">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                convallis quam ac nisl tincidunt, at dapibus libero condimentum.
                Fusce tempus lacus sit amet mauris tincidunt, nec tristique ante
                dictum. Sed ac justo vitae enim varius fringilla.
              </p>
              <LearnMore />
            </div>
            <div>
              <Github />
              <h2 className="mt-5 text-xl">Github</h2>
              <p className="mt-3">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                convallis quam ac nisl tincidunt, at dapibus libero condimentum.
                Fusce tempus lacus sit amet mauris tincidunt, nec tristique ante
                dictum. Sed ac justo vitae enim varius fringilla.
              </p>
              <LearnMore />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceSection;
