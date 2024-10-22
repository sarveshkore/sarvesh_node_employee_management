async function main(req,res){
    const {get_mongo_connection}=require('../base/mongo_connector');
    await get_mongo_connection();
    let data=req.body;
    

    // const { MongoClient } = require('mongodb');
    // const url = 'mongodb://localhost:27017';

    // const client = new MongoClient(url); 
    // await client.connect();
    // console.log('Connected successfully to server');
    // const db = client.db("sarvesh_db");
    // console.log(`db: ${db.databaseName}`);

    const collection = db.collection('col_1');
    console.log(`collection : ${collection.collectionName}`);

    // let dataOne={name:'sarvesh', location: 'ghatkopar'};


    // // let dataMany=[                           
        
    //         {
    //         s_id:1,
    //         s_name:'sarvesh',
    //         city:'mumbai',
    //         marks:79,
    //         misc:{
    //                 s_10_marks:65,
    //                 s_12_marks:60
    //             }
    //         },
    //         {
    //             s_id:2,
    //             s_name:'shekhar',
    //             city:'mumbai',
    //             marks:79,
    //             misc:{
    //                     s_10_marks:65,
    //                     s_12_marks:60
    //                 }
    //         }
         
        
    // ];

    if(Array.isArray(data)){
        const created_many = await collection.insertMany(data);
        console.log('Inserted many documents:', created_many);
        res.send(created_many);
    }
    else{
        const created_one =await collection.insertOne(data);
        console.log('Inserted one document:', created_one);
        res.send(created_one)
    }
    
    // let created_one= await collection.insertOne(data);
    // let created_many= await collection.insertMany(data);

    // console.log(created_data);
    // console.log(data);
    // res.send(data);

    client.close()
}
module.exports={
    main
}

