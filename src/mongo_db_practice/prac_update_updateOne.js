async function main(req,res){
    const { MongoClient, ObjectId } = require('mongodb');
    const { doc_id,update }=req.body;

    const url = 'mongodb://localhost:27017';
    const client = new MongoClient(url);


    await client.connect();
    console.log('Connected successfully to server');

    const db = client.db("sarvesh_db");
    const collection = db.collection('collection_practice');

    await collection.updateOne({'_id': new ObjectId(doc_id)},{$set:update});     
    
    client.close();
}
module.exports={
    main:main
}