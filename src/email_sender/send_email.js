

async function main(req,res) {
  const mailFrom=req.body.mailFrom;
  const mailTo=req.body.mailTo; 
  const mailSubject=req.body.mailSubject;
  const mailMessage=req.body.mailMessage;
  // cosnt 
  // const email_response_id=req.body.email_response_id;
  // const email_status=req.body.email_status;
  // const time_stamp=req.body.time_stamp;

     async function  main1(callback){

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
              // attachments: mailAttachments
            });
          console.log(info);
          callback(info)
          return
     }

     main1(async(info)=>{
       const {get_pg_connection}=require('../base/pg_connector');
       let  client=await get_pg_connection();

       
       if (info.messageSize&&info.accepted&&info.messageTime) {
         const done= info.accepted.length
        //  const reject= info.rejected.length
         var status
         if (done) {
          status="accepted"

        }else{
          status="rejected"
        }
         const result=await client.query('insert into email_stat(email_response_id,mailFrom,mailTo,mailSubject,mailMessage,email_status)  values($1,$2,$3,$4,$5,$6)', [info.messageTime,mailFrom,mailTo,mailSubject,mailMessage,status]
          ,async function(err,data){
             console.log('runn');
           if(err){
               console.log("Error",err);
               res.send(`ERROR in inserting the vlaue:-  ${err}`);
           } else{
                const result1=await client.query('select * from email_stat')
                 
                  //  res.send(`Data inserted successfully:- ${JSON.stringify(data)}`)
                  res.send(`Data inserted successfully:- ${JSON.stringify(result1.rows)}`)

               
           }
    
            client.end();
       }
    );
        }
        
      }
     )


    
        // res.send('email sent')
    }


    
module.exports={
    main
}
