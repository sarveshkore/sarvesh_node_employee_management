async function main(req,res){
    const { MongoClient,ObjectId } = require('mongodb');
    const url = 'mongodb://localhost:27017';
    const client = new MongoClient(url);

    await client.connect();
    console.log('Connected successfully to server');

    const db = client.db("sarvesh_db");
    const collection = db.collection('collection_practice');

    // await collection.insertOne({name:'sarvesh'});
    // await collection.insertMany([{ "a": 1 }, { "a": 2 }, { "a": 3 }]);
    // await collection.insertMany([{ c: 'he bro' }]);
    await collection.updateOne({ "_id" : ObjectId("671b9daa17bfba26551786b5") }, { $set: { f:10 } }); 
    console.log('done');
    

    client.close();
}
module.exports={
    main:main
}