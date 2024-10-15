async function main(req,res){
    const {get_pg_connection}=require('../base/pg_connector');
    let  client=await get_pg_connection();
    const result= await client.query('SELECT * FROM student'
        ,function(err,data){
        if(err){
            console.log("Error",err);
            res.send(`ERROR in inserting the vlaue:-  ${err}`);
        } else{
            var n=1;
            var x=3;
            var pag=(x * n)-x+1; //1
            for (let i = pag-1; i < x; i++) {
                    console.log(data.rows[i]);
            }
            
        }
         client.end();
    }


);



}
module.exports={
    main
}