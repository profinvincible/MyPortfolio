import React from "react";
import { ContactMe } from "../images/IconPictures/contactMeIcon";
import { SocialMediaIcons } from "../images/IconPictures/socialIcons";

const ContactMeSection = () => {
  return (
    <>
      <section id="contact">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 mt-24 center-text">
            <div>
              <h2 className="font-bold text-3xl center-text mt-11 text-center">
                Contact <span>Me</span>
              </h2>
              <h4 className="text-[#fff] font-medium mt-3">
                {" "}
                Let's work together
              </h4>
              <p className="mt-3">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                convallis quam ac nisl tincidunt, at dapibus libero condimentum.
                Fusce tempus lacus sit amet mauris tincidunt, nec tristique ante
                dictum. Sed ac justo vitae enim varius fringilla.
              </p>

              <div className="flex flex-col sm:flex-row mt-5 center-icons">
                <ContactMe />
                <h5 className="text-[#fff] sm:ml-3 lg:ml-0">
                  contact@gmail.com
                </h5>
              </div>

              <div className="md:mt-6 sm:mt-3 center-icons">
                <SocialMediaIcons />
              </div>
            </div>
            <div>
              <form class="flex flex-col gap-4 max-w-md mx-auto mb-10">
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  required
                  className="rounded-lg p-2 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  required
                  className="rounded-lg p-2 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Enter Your Subject"
                  required
                  className="rounded-lg p-2 focus:outline-none"
                />
                <textarea
                  placeholder="Enter Your Message"
                  required
                  className="rounded-lg p-2 h-40 focus:outline-none"></textarea>
                <input
                  type="submit"
                  value="Submit"
                  className="bg-[#0eff] text-black md:text-xl font-medium rounded-lg p-2 cursor-pointer transition-all hover:bg-[#0eff] hover:shadow-[0_0_20px_#0eff] sm:h-16 sm:px-6 sm:py-3"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactMeSection;
