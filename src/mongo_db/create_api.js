async function main(req,res){
    console.log('he');
    
    const { MongoClient } = require('mongodb');
    const url = 'mongodb://localhost:27017';
    const client = new MongoClient(url);


    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db("sarvesh_db");
    const collection = db.collection('col_1');
    // const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
    // await collection.insertMany([{ sarvesh: 1 }, { rupesh: 2 }, { harsh: 3 }]);
    await collection.insertOne({abhijeet:4});
    

    client.close()
}
module.exports={
    main
}