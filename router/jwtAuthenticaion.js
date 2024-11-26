module.exports=function(app){
    app.post('/jwt_authentication/create_jwt_token/',function(req,res){
        let joi=require('../src/jwt_authentication/create_jwt_token');
        joi.main(req,res);
    });

    app.post('/jwt_authentication/verify_jwt_token/',function(req,res){
        let joi=require('../src/jwt_authentication/verify_jwt_token');
        joi.main(req,res);
    });
}