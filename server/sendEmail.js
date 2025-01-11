const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 5000; // Or any port you want

// Enable CORS for all routes (adjust for production settings if needed)
app.use(cors());
app.use(bodyParser.json()); // For parsing JSON bodies

// POST route to handle form submission
app.post("/send-email", async (req, res) => {
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
    to: "muoghaluijeoma9@gmail.com", // This should be a valid email address
    subject: subject || "New Message from Contact Form", // Default subject if not provided
    text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to send email" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
