async function main(req,res){
    const { MongoClient,ObjectId } = require('mongodb');
    const url = 'mongodb://localhost:27017';
    const client = new MongoClient(url);

    await client.connect();
    console.log('Connected successfully to server');

    const db = client.db("sarvesh_db");
    const collection = db.collection('collection_practice');

    await collection.deleteOne({ '_id': new ObjectId("6718a196fc42f146e6f7b6a1") });
    
    client.close();
}
module.exports={
    main:main
}