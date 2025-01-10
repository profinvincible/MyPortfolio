import React, { useEffect, useState } from "react";

const CircleProgress = ({ percentage, label }) => {
  const [strokeOffset, setStrokeOffset] = useState(502); // Default circumference for a circle with radius 80
  const [showPercentage, setShowPercentage] = useState(false); // Controls visibility of percentage

  useEffect(() => {
    // Start animation for the green stroke
    setStrokeOffset((1 - percentage / 100) * 502);

    // Delay the appearance of the percentage to match the animation start
    const timeout = setTimeout(() => {
      setShowPercentage(true);
    }, 500); // Adjust delay to synchronize with the stroke animation

    return () => clearTimeout(timeout); // Cleanup timeout
  }, [percentage]);

  return (
    <div className="flex flex-col items-center relative">
      {/* SVG Container for the Circle */}
      <svg
        x="0px"
        y="0px"
        viewBox="0 0 200 200"
        className="w-24 h-24"
        xmlns="http://www.w3.org/2000/svg">
        {/* Background Circle */}
        <circle
          cx="100"
          cy="100"
          r="80"
          fill="none"
          stroke="gray"
          strokeWidth="10"
        />
        {/* Progress Circle */}
        <circle
          cx="100"
          cy="100"
          r="80"
          fill="none"
          stroke="#0eff"
          strokeWidth="10"
          strokeDasharray="502" // Total length of the circle's path
          strokeDashoffset={strokeOffset} // Dynamic value for the stroke offset
          strokeLinecap="round" // Makes the ends of the stroke rounded
          className="transition-all duration-1000 ease-in-out" // Smooth transition effect
        />
      </svg>

      {/* Percentage inside the Circle */}
      {showPercentage && (
        <div className="absolute inset-0 flex justify-center items-center text-xs text-[#fff] mb-8">
          {`${percentage}%`}
        </div>
      )}

      {/* Label */}
      <div className="text-[#fff] mt-2">{label}</div>
    </div>
  );
};

// Example Usage of CircleProgress Component
export const CreativityCircleImage = () => {
  return <CircleProgress percentage={90} label="Creativity" />;
};

export const CommunicationCircleImage = () => {
  return <CircleProgress percentage={65} label="Communication" />;
};

export const ProblemSolvingCircleImage = () => {
  return <CircleProgress percentage={75} label="Problem Solving" />;
};

export const TeamWorkCircleImage = () => {
  return <CircleProgress percentage={80} label="Team Work" />;
};
