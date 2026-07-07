import nodemailer from "nodemailer";

const welcomeEmail = (name) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #4CAF50;">Welcome to ShopEase! 🎉</h2>
        <p>Hi <b>${name}</b>,</p>
        <p>Thank you for registering with us! We're excited to have you on board.</p>
        <p>You can now:</p>
        <ul>
            <li>🛍️ Browse thousands of products</li>
            <li>💳 Shop securely</li>
            <li>🚚 Track your orders</li>
            <li>🎁 Get exclusive deals & offers</li>
        </ul>
        <a href="http://localhost:3000" 
           style="background-color: #4CAF50; color: white; padding: 10px 20px; 
                  text-decoration: none; border-radius: 5px;">
            Start Shopping
        </a>
        <h2>OTP Verification 🔐</h2>
    </div>
    `;
};

const SendOtp = (name, otp) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>OTP Verification 🔐</h2>
        <p>Hi <b>${name}</b>,</p>
        <p>Your OTP is:</p>
        <h1 style="color: #4CAF50; letter-spacing: 5px;">${otp}</h1>
        <p>This OTP is valid for <b>10 minutes</b> only.</p>
        <p>Regards,<br/><b>ShopEase Team</b></p>
    </div>
    `;
};

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

export const SendingWelocomeMail = async (name, email) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: "Welcome to ShopEase! 🎉",
      html: welcomeEmail(name),
    });
    console.log("mail sent");
  } catch (err) {
    console.log(err.message);
  }
};

export const SendingOtpInMail = async (name, email, otp) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: "OTP Verification 🔐",
      html: SendOtp(name, otp),
    });
  } catch (err) {
    console.log(err.message);
  }
};