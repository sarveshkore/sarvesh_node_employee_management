async function main(req,res){
    const {get_mongo_connection}=require('../base/mongo_connector');
    await get_mongo_connection();    
    // const { MongoClient } = require('mongodb');
    // const url = 'mongodb://localhost:27017';
    // const client = new MongoClient(url);


    // await client.connect();
    // console.log('Connected successfully to server');
    // const db = client.db("sarvesh_db");


    const collection = db.collection('col_1');
    await collection.deleteOne({  s_name:'harsh' });
    console.log('deleted')
    client.close()
}
module.exports={
    main
}