

async function main(req,res) {
    mailFrom=req.body.mailFrom;
    mailTo=req.body.mailTo;
    mailSubject=req.body.mailSubject;
    mailMessage=req.body.mailMessage;
    mailAttachments=req.body.mailAttachments;

    const nodemailer = require("nodemailer");

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, 
      auth: {
        user: "sarvesh2k2@gmail.com",
        pass: "jawerlvemvitwfap",
      },
    });
    const info = await transporter.sendMail({
            from: mailFrom,
            to: mailTo,
            subject: mailSubject,
            text: mailMessage,
            attachments: mailAttachments
          });
        res.send('email sent')
    }
module.exports={
    main
}
