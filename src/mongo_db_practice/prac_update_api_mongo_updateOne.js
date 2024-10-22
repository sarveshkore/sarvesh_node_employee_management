async function main(req,res){
    const { MongoClient } = require('mongodb');
    const url = 'mongodb://localhost:27017';
    const client = new MongoClient(url);

    await client.connect();
    console.log('Connected successfully to server');

    const db = client.db("sarvesh_db");
    const collection = db.collection('collection_practice');

    await collection.updateOne({name:'sarvesh'},{$set :{ name:'rupesh'}});

    client.close();
}
module.exports={
    main:main
}