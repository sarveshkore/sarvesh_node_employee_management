async function main(req,res){
    const { MongoClient, ObjectId } = require('mongodb');
    const { doc_id,update }=req.body;

    const url = 'mongodb://localhost:27017';
    const client = new MongoClient(url);


    await client.connect();
    console.log('Connected successfully to server');

    const db = client.db("sarvesh_db");
    const collection = db.collection('collection_practice');

    // await collection.updateOne({name:'sarvesh'},{$set :{ name:'rupesh'}});
    // await collection.updateOne({'_id': new ObjectId('672855d795371aef94d6fe17')},{$set:{'personalInfo.phone.mobile':"+91-8425863789"}});
    await collection.updateOne({'_id': new ObjectId(doc_id)},{$set:update});     //update any record using updateOne
    


    client.close();
}
module.exports={
    main:main
}