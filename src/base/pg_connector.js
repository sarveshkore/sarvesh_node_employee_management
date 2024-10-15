 async function get_pg_connection(){

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

    try {
        
        await client.connect();
    } catch (error) {
        console.log(error);
        
    }
return client;
}
module.exports={
    get_pg_connection
}