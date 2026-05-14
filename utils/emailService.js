import nodemailer from 'nodemailer';

const sendEmail = async (options) => {
  // Create a transporter with explicit Gmail SMTP settings
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // Use TLS, not SSL
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS.trim(), // Trim any whitespace
    },
  });

  // Define the email options
  const mailOptions = {
    from: `Prestige Media <${process.env.EMAIL_USER}>`,
    to: options.email,
    subject: options.subject,
    text: options.message,
    html: options.html, // Optional HTML formatting
  };

  // Send the email
  await transporter.sendMail(mailOptions);
};

export default sendEmail;
