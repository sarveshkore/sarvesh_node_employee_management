module.exports=function(app){
    app.post('/email_sender/send_email/', function (req, res) {       
    let x=require('../src/email_sender/send_email');
 
    console.log("X",x)
    x.main(req,res);
   
})

}
