async function main(req,res){
    const {get_pg_connection}=require('../base/pg_connector');
    
    let  client=await get_pg_connection();

    const result=await client.query('create table student_data(s_id int primary key, s_name varchar(255), location_id int, foreign key(location_id) references location(l_id));',[]

        ,function(err,data){
        if(err){
            console.log("Error",err);
            res.send(`ERROR in inserting the vlaue:-  ${err}`);
        } else{
            console.log(data.rows,'Created');
            res.send("Table created Sucessfully!!");
        }
         client.end();
    }
);

}
module.exports={
    main
}