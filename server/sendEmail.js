const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 5000; // Or any port you want

// Enable CORS for all routes (adjust for production settings if needed)
app.use(cors()); // This will allow all origins
app.use(bodyParser.json()); // For parsing JSON bodies

// POST route to handle form submission
app.post("/https://myportfolio-0y5a.onrender.com", async (req, res) => {
  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "muoghaluijeoma9@gmail.com", // Your email
      pass: "btevsiswiyjduyys", // Your generated app password
    },
  });

  const mailOptions = {
    from: "muoghaluijeoma9@gmail.com",
    to: "muoghaluijeoma9@gmail.com", // The email where you want to receive the form messages
    subject: subject || "New Message from Contact Form", // Default subject if not provided
    text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
