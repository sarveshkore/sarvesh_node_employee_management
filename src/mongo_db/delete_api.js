async function main(req,res){
    console.log('he');
    
    const { MongoClient } = require('mongodb');
    const url = 'mongodb://localhost:27017';
    const client = new MongoClient(url);


    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db("sarvesh_db");
    // const collection = db.collection('col_1');
    // db.collection('col_1').drop();
    await client.db("sarvesh_db").collection('col_1').drop();
    console.log('deleted')
    client.close()
}
module.exports={
    main
}