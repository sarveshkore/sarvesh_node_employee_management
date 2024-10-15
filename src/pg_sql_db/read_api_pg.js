// students table name
async function main(req,res){
    // const {id,name,city}=req.body;
    const {get_pg_connection}=require('../base/pg_connector');
    let  client=await get_pg_connection();
    // const result= await client.query('INSERT INTO student(s_id,s_name,city) VALUES($1,$2,$3)', [id,name,city]
    const result= await client.query('select * from student'

        ,function(err,data){
        if(err){
            console.log("Error",err);
            res.send(`ERROR in inserting the vlaue:-  ${err}`);
        } else{
            console.log(data.rows,'Created');
            res.send(data.rows);
        }
         client.end();
    }
);

}
module.exports={
    main
}