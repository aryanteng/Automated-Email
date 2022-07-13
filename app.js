const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const path = require("path");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: "testerg@outlook.com",
    pass: "abc",
  },
});

const options = {
  from: "testerg@outlook.com",
  to: "receiver@gmail.com",
  subject: "Sending mail with node.js",
  text: "hello, this is you.",
};

transporter.sendMail(options, function (err, info) {
  if (err) {
    console.log(err);
    return;
  }
  console.log("sent" + info.response);
});
