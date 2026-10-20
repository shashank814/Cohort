import nodemailer from "nodemailer";
import transporter from "../config/email.js";

const sendEmail = async (to, subject, text, html) => {
  try {
    const info = await transporter.sendMail({
      from: `"Shashank Singh" <${process.env.NODEMAILER_USER}`,
      to: "singhraj80637@gmail.com",
      subject: "Welcome to our application",
      text: "hello",
      html,
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  } catch (error) {
    console.log("Error sending email: ", error);
  }
};


export default sendEmail