// import React, { useState } from "react";
// import { ContactMe } from "../images/IconPictures/contactMeIcon";
// import { SocialMediaIcons } from "../images/IconPictures/socialIcons";

// const ContactMeSection = () => {
//   // Form state management
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   // Handle form data change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // Handle form submit
//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent the default form submission

//     try {
//       const response = await fetch(
//         "https://myportfolio-0y5a.onrender.com/send-email",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData), // Send the form data as a JSON body
//         }
//       );

//       const data = await response.json();
//       if (response.ok) {
//         alert("Message sent successfully!");
//         // Clear the form after successful submission
//         setFormData({
//           name: "",
//           email: "",
//           subject: "",
//           message: "",
//         });
//       } else {
//         alert("Error sending message: " + data.error);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Failed to send message");
//     }
//   };

//   return (
//     <section id="contact" style={{ padding: "1rem" }}>
//       <div className="container mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 md:mt-24 center-text">
//           <div>
//             <h2 className="font-bold text-3xl center-text mt-11 text-center">
//               Contact <span>Me</span>
//             </h2>
//             <h4 className="text-[#fff] font-medium mt-3">
//               Let's work together
//             </h4>
//             <p className="mt-3">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
//               convallis quam ac nisl tincidunt, at dapibus libero condimentum.
//             </p>

//             <div className="flex flex-col sm:flex-row mt-5 center-icons">
//               <ContactMe />
//               <h5 className="text-[#fff] sm:ml-3 lg:ml-0">contact@gmail.com</h5>
//             </div>

//             <div className="md:mt-6 sm:mt-3 center-icons">
//               <SocialMediaIcons />
//             </div>
//           </div>

//           <div>
//             {/* Contact form */}
//             <form
//               onSubmit={handleSubmit}
//               className="flex flex-col gap-4 max-w-md mx-auto mb-10">
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Enter Your Name"
//                 required
//                 className="rounded-lg p-2 focus:outline-none"
//               />
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Enter Your Email"
//                 required
//                 className="rounded-lg p-2 focus:outline-none"
//               />
//               <input
//                 type="text"
//                 name="subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 placeholder="Enter Your Subject"
//                 required
//                 className="rounded-lg p-2 focus:outline-none"
//               />
//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 placeholder="Enter Your Message"
//                 required
//                 className="rounded-lg p-2 h-40 focus:outline-none"></textarea>
//               <input
//                 type="submit"
//                 value="Submit"
//                 style={{ padding: "0.75rem 1.5rem" }}
//                 className="   custom-contact-padding bg-[#0eff] text-black md:text-xl font-medium rounded-lg p-2 cursor-pointer transition-all hover:bg-[#0eff] hover:shadow-[0_0_20px_#0eff] sm:h-16 sm:px-6 sm:py-3"
//               />
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactMeSection;


import React, { useState } from "react";
import { ContactMe } from "../images/IconPictures/contactMeIcon";
import { SocialMediaIcons } from "../images/IconPictures/socialIcons";

const ContactMeSection = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const response = await fetch("https://formspree.io/f/maqvkwlk", {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <section id="contact" style={{ padding: "1rem" }}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 md:mt-24 center-text">
          <div>
            <h2 className="font-bold text-3xl center-text mt-11 text-center">
              Contact <span>Me</span>
            </h2>
            <h4 className="text-[#fff] font-medium mt-3">
              Let's work together
            </h4>
            <p className="mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              convallis quam ac nisl tincidunt, at dapibus libero condimentum.
            </p>
            <div className="flex flex-col sm:flex-row mt-5 center-icons">
              <ContactMe />
              <h5 className="text-[#fff] sm:ml-3 lg:ml-0">contact@gmail.com</h5>
            </div>
            <div className="md:mt-6 sm:mt-3 center-icons">
              <SocialMediaIcons />
            </div>
          </div>

          <div>
            {status === "success" && (
              <p className="text-green-400 text-center mb-4 font-body">
                ✅ Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-center mb-4 font-body">
                ❌ Something went wrong. Please try again.
              </p>
            )}

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 max-w-md mx-auto mb-10"
            >
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                required
                className="rounded-lg p-2 focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                required
                className="rounded-lg p-2 focus:outline-none"
              />
              <input
                type="text"
                name="subject"
                placeholder="Enter Your Subject"
                required
                className="rounded-lg p-2 focus:outline-none"
              />
              <textarea
                name="message"
                placeholder="Enter Your Message"
                required
                className="rounded-lg p-2 h-40 focus:outline-none"
              />
              <input
                type="submit"
                value="Submit"
                style={{ padding: "0.75rem 1.5rem" }}
                className="custom-contact-padding bg-[#0eff] text-black md:text-xl font-medium rounded-lg p-2 cursor-pointer transition-all hover:bg-[#0eff] hover:shadow-[0_0_20px_#0eff] sm:h-16 sm:px-6 sm:py-3"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMeSection;