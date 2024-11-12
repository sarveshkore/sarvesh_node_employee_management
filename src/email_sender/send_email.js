

async function main(req,res) {

    const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "sarvesh2k2@gmail.com",
    pass: "jawerlvemvitwfap",
  },
});

  const info = await transporter.sendMail({
    from: '"Sarvesh Kore 👻" <sarvesh2k2@gmail.com>', // sender address
    to: "sarveshnda@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world", // plain text body
    // html: "<b><i>Hello Sarvesh Kore</i></b>", // html body
    // file:'"C:\Users\Sarvesh\OneDrive\Pictures\Screenshots\Screenshot 2023-03-01 231908.png"'
    attachments: [
        {   // utf-8 string as an attachment
            filename: 'srilanka.png',
            // content: 'hello world!',
            path:'C:/Users/Sarvesh/OneDrive/Pictures/Screenshots/Screenshot 2023-03-01 231908.png'
        },
        {   // utf-8 string as an attachment
            filename: '2023_birthday.png',
            // content: 'hello world!',
            path:'C:/Users/Sarvesh/OneDrive/Pictures/Screenshots/BIRTHDAY.png'
        }
    ]
  });

//   console.log("Message sent: %s", info.messageId);

    res.send('email sent')

}
module.exports={
    main
}
// main();