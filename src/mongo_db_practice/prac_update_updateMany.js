async function main(req,res){
    const { MongoClient ,ObjectId} = require('mongodb');
    const url = 'mongodb://localhost:27017';
    const client = new MongoClient(url);
    // const ObjectId =new ObjectId();
    
    await client.connect();
    console.log('Connected successfully to server');
    
    const db = client.db("sarvesh_db");
    const collection = db.collection('collection_practice');
    // const collection = db.collection('demo_collection');
     await collection.updateOne({"_id" :new ObjectId("6718a196fc42f146e6f7b6a1")}, { $set: { 'student_detail.0.educational_details.0.percentage': 50 } }); 
    // await collection.updateOne({  "_id" :new  ObjectId("671b9daa17bfba26551786b5")}, { $set: { g: 11 } }); 

    console.log('donn');
    

    client.close();
}
module.exports={
    main:main
}