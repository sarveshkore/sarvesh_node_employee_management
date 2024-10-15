async function main(req,res){
        const {id}=req.params;
        const pg = require("pg");
        const { Client } = pg;
        const x={
            user: 'postgres',
            password: 'root',
            host: 'localhost',
            port: 5432,
            database: 'node_project_db',
        };
        const client = new Client(x);

        console.log('client')
        try {
            
            await client.connect();
        } catch (error) {
            console.log(error);
            
        }
        console.log("done");
        
    const result= await client.query('DELETE FROM student WHERE s_id = $1', [id]

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