async function main(req,res){
    const {s_id}=req.params;
    const {get_pg_connection}=require('../base/pg_connector');
    let  client=await get_pg_connection();
    const result= await client.query('DELETE FROM student WHERE s_id = $1', [s_id]

        ,function(err,data){
        if(err){
            console.log("Error",err);
            res.send(`ERROR in inserting the vlaue:-  ${err}`);
        } else{
            console.log(data.rows,'Created');
            res.send("Value Deleted Sucessfully!!");
        }
        client.end();
    }
);

}
module.exports={
    main
}