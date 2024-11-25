module.exports=function(app){
    app.get('/streams/read_file_stream/',function(req,res){
        let stream=require('../src/streams/read_file_stream');
        stream.main(req,res);
    });
    app.post('/streams/write_file_stream/',function(req,res){
        let stream=require('../src/streams/write_file_stream');
        stream.main(req,res);
    });
}