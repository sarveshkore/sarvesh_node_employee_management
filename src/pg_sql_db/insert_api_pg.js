async function main(req,res){
    // const {s_id,s_name,city,marks,misc}=req.body;
        const mailFrom=req.body.mailFrom;
        const mailTo=req.body.mailTo; 
        const mailSubject=req.body.mailSubject;
        const mailMessage=req.body.mailMessage;
        const email_response_id=req.body.email_response_id;
        const email_status=req.body.email_status;
        const time_stamp=req.body.time_stamp;


        // const mailAttachments=req.body.mailAttachments;
    const {get_pg_connection}=require('../base/pg_connector');
    let  client=await get_pg_connection();
    // const result= await client.query('INSERT INTO student(s_id,s_name,city,marks,misc) VALUES($1,$2,$3,$4,$5)', [s_id,s_name,city,marks,misc]
    const result= await client.query('insert into email_stat(email_response_id,mailFrom,mailTo,mailSubject,mailMessage,email_status,time_stamp)  values($1,$2,$3,$4,$5,$6)', [email_response_id,mailFrom,mailTo,mailSubject,mailMessage,email_status,time_stamp]



        ,function(err,data){
        if(err){
            console.log("Error",err);
            res.send(`ERROR in inserting the vlaue:-  ${err}`);
        } else{
            if(res.send){
                res.send(`Data inserted successfully:- ${data}`)
            }
        }

         client.end();
    }
);

}
module.exports={
    main
}