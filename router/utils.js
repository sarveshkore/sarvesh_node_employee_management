module.exports=function(app){
        app.post('/utils/utils/',function(req,res){
            let joi=require('../src/utils/utils');
            joi.main(req,res);
        });
}