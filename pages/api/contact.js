import nodemailer from "nodemailer";

export default async function ContactAPI(req, res) {
  const { name, email, message } = req.body;

  const user = process.env.EMAIL;

  console.log(user);

  const data = {
    name,
    email,
    message,
  };

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // use TLS
    auth: {
      user: user,
      pass: process.env.PASSWORD,
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false,
    },
  });

  try {
    const mail = await transporter.sentMail({
      from: user,
      to: "dujules23@gmail.com",
      replyTo: email,
      subject: `Contact from submission from ${name}`,
      html: `
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Message: ${message}</p>
      `,
    });

    console.log("Message sent:", mail.messageId);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Could not send email. Your message was not sent",
    });
  }

  return res.status(200).json({ message: "success" });
}
