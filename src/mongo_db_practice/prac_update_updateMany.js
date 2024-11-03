async function main(req,res){
    const { MongoClient ,ObjectId} = require('mongodb');
    const url = 'mongodb://localhost:27017';
    const client = new MongoClient(url);

    await client.connect();
    console.log('Connected successfully to server');
    
    const db = client.db("sarvesh_db");
    const collection = db.collection('collection_practice');
    let data=await collection.updateOne({"_id" :new ObjectId("67273aa324c2547344a259cb")}, { $set: { 'student_detail.1.educational_details.1.percentage': 90 } }); 
    console.log(data);
    client.close();
}
module.exports={
    main:main
}