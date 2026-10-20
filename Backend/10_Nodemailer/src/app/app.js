import express from "express";
import sendEmail from "../utils/send.email.js";

const app = express();

app.use(express.json());

sendEmail(
  "recipient@example.com",
  "Test Email Subject",
  "This is a test email sent with Nodemailer using OAuth2.",
  "<p>This is a test email sent with <b>Nodemailer</b> using OAuth2.</p>",
);

export default app;
