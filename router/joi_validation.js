module.exports=function(app){
    app.post('/joi_validator/joiValidator/',function(req,res){
        let joi=require('../src/joi_validator/joiValidator');
        joi.main(req,res);
    });
}