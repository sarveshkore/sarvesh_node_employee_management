module.exports=function(app){
    require ('./employee')(app);
    require ('./file_system')(app);
    require ('./pg_database')(app);
    require ('./mongo_db')(app);
    require('./email_sender')(app);
    require('./event_emitter')(app);
    require('./joi_validation')(app);
    require('./streams')(app);


    require('./jwtAuthenticaion')(app);
    require('./utils')(app);

}