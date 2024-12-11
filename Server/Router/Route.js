import express from 'express';
const Router = express.Router();
import Mail from '../NodeMailer/Mail.js'
Router.post('/contact',async (req,res)=>{
    const {fname,phone,email,subject,message} = req.body;
    try {
        if(fname && phone && email && subject && message){
          const SendMail = await  Mail(fname,phone,email,subject,message);
          res.status(200).json({message: "Email sent successfully"});
        }
    } catch (error) {
        console.log(error);
        
    }
    
});

export default Router;