import nodemailer from 'nodemailer';
import 'dotenv/config'
import Template from './MailTemplate.js';
const Mail = async (fname,phone,email,subject,message) =>{
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for port 465, false for other ports
        auth: {
          user: process.env.USER,
          pass: process.env.AUTH,
        },
      });

      const info = await transporter.sendMail({
        from: email, // sender address
        to: process.env.USER, // list of receivers
        subject: "Contact", // Subject line
        text: null, // plain text body
        html: Template(fname,phone,email,subject,message), // html body
      });

      console.log("Message sent: %s", info.messageId);
}

export default Mail;