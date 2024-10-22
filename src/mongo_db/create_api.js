async function main(req,res){
        
    const { MongoClient } = require('mongodb');
    const url = 'mongodb://localhost:27017';
    const client = new MongoClient(url); 

    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db("sarvesh_db");
    console.log(`db: ${db.databaseName}`);

    const collection = db.collection('col_1');
    console.log(`collection : ${collection.collectionName}`);

    let data={name:'sarvesh', location: 'gharkopar'}
    let created_data= await collection.insertOne(data);
    console.log(created_data);
    console.log(data);
    res.send(data);

    client.close()
}
module.exports={
    main
}