import React, { useState, useEffect } from "react";

const LastSection = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="relative text-center bg-[#0eff] flex items-center justify-center">
        <p className="text-black mt-3">
          Developed with love by ProfInvincible @ 2025
        </p>
        <a
          href=""
          className={`fixed right-4 bottom-0 cursor-pointer text-2xl md:text-4xl ${
            isScrolling ? "text-white" : "text-black"
          }`}>
          <i className="bx bxs-up-arrow-square"></i>
        </a>
      </div>
    </>
  );
};

export default LastSection;
