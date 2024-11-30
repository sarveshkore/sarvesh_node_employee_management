module.exports=function(app){
    app.post('/login/login/',function(req,res){
        let joi=require('../src/login/login');
        joi.main(req,res);
    });
}