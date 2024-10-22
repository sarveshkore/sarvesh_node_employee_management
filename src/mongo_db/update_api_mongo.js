async function main(req,res){

    const {get_mongo_connection}=require('../base/mongo_connector');
    await get_mongo_connection();

    const { MongoClient } = require('mongodb');
    const url = 'mongodb://localhost:27017';
    const client = new MongoClient(url);


    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db("sarvesh_db");
    const collection = db.collection('col_1');
    // let update={s_id:4};
    // let updateTo={ $set: {s_name:"Rupesh" }, };
    // await collection.updateOne({location:'ghatkopar'},{ $set: {location:'kurla' } });
    // await collection.updateOne(update,updateTo,{upsert:true});
    // await collection.updateMany({s_id:4},{ $set: {s_id:1,s_name:'harsh' } },{upsert:true});


    console.log('updated ');

    client.close()
}
module.exports={
    main
}