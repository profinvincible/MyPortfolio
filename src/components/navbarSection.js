import React, { useState } from "react";
import "././../../src/App.css";

const NavbarSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between flex-wrap p-6 navbar">
      <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72 navbar-brand">
        <a
          href="www.example.com"
          className="lg:ml-24"
          onClick={(e) => {
            e.preventDefault(); // Prevent default anchor behavior
            window.location.reload(); // Reload the page
          }}>
          Portfolio
        </a>
      </div>
      <div className="block lg:hidden bg-white">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400">
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          isOpen ? "block" : "hidden"
        }`}>
        <div className="text-sm lg:flex-grow ml-44 font-semibold sm:font-semibold center-center">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault(); // Prevent default anchor behavior
              window.location.reload(); // Reload the page
            }}
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 ml-6 active navbars sm:text-lg"
            style={{ "--i": 1 }}>
            Home
          </a>
          <a
            href="#about"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 ml-6 sm:text-lg navbars"
            style={{ "--i": 2 }}>
            About
          </a>
          <a
            href="#services"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 ml-6  sm:text-lg navbars"
            style={{ "--i": 3 }}>
            Services
          </a>
          <a
            href="#skills"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 ml-6 sm:text-lg navbars"
            style={{ "--i": 4 }}>
            Skills
          </a>
          <a
            href="#projects"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 ml-6 navbars sm:text-lg"
            style={{ "--i": 5 }}>
            Projects
          </a>
          <a
            href="#contact"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 ml-6 navbars sm:text-lg "
            style={{ "--i": 6 }}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavbarSection;
