
        async function main(req,res){
            const {get_mongo_connection}=require('../base/mongo_connector');
            await get_mongo_connection();
            let {data}=req.body;        //full collection
            // let data=req.body;       //single document

            // const { MongoClient } = require('mongodb');
            // const url = 'mongodb://localhost:27017';

            // const client = new MongoClient(url); 
            // await client.connect();
            // console.log('Connected successfully to server');
            // const db = client.db("sarvesh_db");
            // console.log(`db: ${db.databaseName}`);

            const collection = db.collection('col_1');
            console.log(`collection : ${collection.collectionName}`);


            let get_data=await collection.find(data).toArray();
            console.log(get_data)
           
            client.close()
        }
        module.exports={
            main
        }