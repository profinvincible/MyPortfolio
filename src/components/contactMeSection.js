import React from "react";
import { ContactMe } from "../images/IconPictures/contactMeIcon";
import { SocialMediaIcons } from "../images/IconPictures/socialIcons";

const ContactMeSection = () => {
  return (
    <>
      <section id="contact">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 mt-24">
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
              <div className="flex mt-5">
                <ContactMe />
                <h5 className="text-[#fff]">contact@gmail.com</h5>
              </div>
              <div className="mt-6">
                <SocialMediaIcons />
              </div>
            </div>
            <div>
              <form class="flex flex-col gap-4 max-w-md mx-auto">
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
                  className="bg-[#0eff] link button text-black font-medium rounded-lg p-2 cursor-pointer transition-all"
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
