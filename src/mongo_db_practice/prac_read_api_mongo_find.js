async function main(req,res){
    const { MongoClient } = require('mongodb');
    const url = 'mongodb://localhost:27017';
    const client = new MongoClient(url);

    await client.connect();
    console.log('Connected successfully to server');

    const db = client.db("sarvesh_db");
    const collection = db.collection('collection_practice');

    let data=await collection.find({name:'rupesh'}).toArray();
    console.log(data)
}
module.exports={
    main:main
}