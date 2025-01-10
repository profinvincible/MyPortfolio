import React from "react";

export const MoreAboutMeButton = () => {
  return (
    <a
      href
      className="inline-flex justify-center items-center button text-black font-bold text-lg no-underline mt-1 bg-[#0eff] hover:bg-[#0eff] hover:shadow-[0_0_30px_#0eff] transition-all duration-300 rounded-lg">
      <button className="py-2 px-4">More About Me</button>
    </a>
  );
};

export const LearnMore = () => {
  return (
    <a
      href=""
      className="inline-flex justify-center items-center button text-black font-bold text-lg no-underline mt-5 bg-[#0eff] hover:bg-[#0eff] hover:shadow-[0_0_30px_#0eff] transition-all duration-300 rounded-lg">
      <button className="py-2 px-4">Learn More</button>
    </a>
  );
};
