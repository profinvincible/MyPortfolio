// import React, { useState, useEffect } from "react";

// const ScrollToTopIcon = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   // Show the icon when the user scrolls down 100px
//   const toggleVisibility = () => {
//     if (window.pageYOffset > 100) {
//       setIsVisible(true);
//     } else {
//       setIsVisible(false);
//     }
//   };

//   // Scroll to the top smoothly
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", toggleVisibility);

//     return () => {
//       window.removeEventListener("scroll", toggleVisibility);
//     };
//   }, []);

//   return (
//     <div
//       onClick={scrollToTop}
//       className={`fixed bottom-4 right-4 p-4 text-black cursor-pointer transition-opacity ${
//         isVisible ? "opacity-100" : "opacity-100"
//       }`}
//       style={{ fill: "#fff" }}>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="40"
//         height="40"
//         viewBox="0 0 24 24">
//         <path d="M5 21h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2zm7-14 5 5h-4v5h-2v-5H7l5-5z"></path>
//       </svg>
//     </div>
//   );
// };

// export default ScrollToTopIcon;
