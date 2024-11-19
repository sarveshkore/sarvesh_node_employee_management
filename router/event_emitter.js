module.exports=function(app){
    app.get('/event_emitter/emit_events/',function(req,res){
        let read_api=require('../src/event_emitter/emit_events');
        read_api.main(req,res);
    });
}