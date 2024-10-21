module.exports=function(app){
    require ('./employee')(app);
   
    require ('./file_system')(app);
    require ('./pg_database')(app);
    require ('./mongo_db')(app);
}

// require ('./file_system')(app);
// function let