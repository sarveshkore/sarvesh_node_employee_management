async function main(req,res){
    const { MongoClient } = require('mongodb');
    const url = 'mongodb://localhost:27017';
    const client = new MongoClient(url);

    await client.connect();
    console.log('Connected successfully to server');

    const db = client.db("sarvesh_db");
    const collection = db.collection('collection_practice');

    await collection.deleteOne({s_name:'sarvesh'});     //delete from document where only sarvesh record is there.

    // await collection.deleteOne({                         //deletes full document
    //     "student_detail": { $elemMatch: { s_name: 'Aditi' } } // Match the document containing Aditi
    // });
    
    
    
    client.close();
}
module.exports={
    main:main
}