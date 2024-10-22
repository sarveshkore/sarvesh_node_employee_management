async function get_mongo_connection(){
    const { MongoClient } = require('mongodb');
    const url = 'mongodb://sarvesh_db:root@localhost:27017';

    const client = new MongoClient(url); 
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db("sarvesh_db");
    console.log(`db: ${db.databaseName}`);

}
module.exports={
    get_mongo_connection
}