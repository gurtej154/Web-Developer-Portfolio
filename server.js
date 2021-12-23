const express = require("express");
const req = require("express/lib/request");
const path = require("path");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 3001;

dotenv.config();
let initialPath = path.join(__dirname, "public");
let app = express();

// Middleware
app.use(express.static(initialPath));
app.use(express.json());

// Get route
app.get("/", (req, res) => {
  res.sendFile(path.join(initialPath, "/public/html/index.html"));
});

// Post request
app.post("/mail", (req, res) => {
  const { firstname, lastname, subject, email, msg } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: "enter sender email here",
    to: "enter reciever email here",
    subject: "Postfolio",
    text: `First name: ${firstname}, \nLast name: ${lastname}, \nSubject: ${subject} \nEmail: ${email}, \nMessage: ${msg}`,
  };

  transporter.sendMail(mailOptions, (err, result) => {
    if (err) {
      console.log(err);
      res.json("opps! It seems like some error occurred");
    } else {
      res.json(
        "Thanks for emailing me, i will reply to you within two working days."
      );
    }
  });
});

app.listen(PORT, () => {
  console.log(`Now listening on port: http://localhost:${PORT}`);
});

// const express = require("express");
// const app = express();

// const PORT = process.env.PORT || 3001;

// // Middleware
// app.use(express.static("public"));

// // Get route for web portfolio
// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/public/html/index.html");
//   // res.sendFile(path.join(__dirname, "/public/html/index.html"));
// });

// // Get route for contact form
// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/public/html/contactform.html");
//   // res.sendFile(path.join(__dirname, "/public/html/index.html"));
// });

// app.listen(PORT, () => {
//   console.log(`Now listening on port: http://localhost:${PORT}`);
// });
