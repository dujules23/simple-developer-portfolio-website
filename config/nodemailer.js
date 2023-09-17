import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.PASSWORD;

export const transporter = nodemailer.createTransport({
  service: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: email,
    pass,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};
