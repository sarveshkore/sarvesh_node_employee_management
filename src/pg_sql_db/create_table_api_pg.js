async function main(req,res){
    
    const {get_pg_connection}=require('../base/pg_connector');
    let  client=await get_pg_connection();
    
    const result= await client.query('create table student(s_id integer primary key, s_name varchar(255), city varchar(255), marks int, misc json)',[]

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