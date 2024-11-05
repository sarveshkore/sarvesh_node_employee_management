async function main(req,res){
    
    const { MongoClient } = require('mongodb');
    const url = 'mongodb://localhost:27017';
    const client = new MongoClient(url);

    await client.connect();
    console.log('Connected successfully to server');

    const db = client.db("sarvesh_db");
    const collection = db.collection('collection_practice');

    const agg= await collection.aggregate([
        {
            $skip:1,
        },
        {$unwind:'$academicDetails.courses'},
        {
            $project: {
                '_id':0,
                f_name:'$personalInfo.firstName',
                l_name:'$personalInfo.lastName',
                courseName:'$academicDetails.courses.courseName',
                marks:'$academicDetails.courses.marks'
                
            }
        },
        // {
        //     $group:{
        //         _id:'$f_name',
        //         total_marks:{$sum:'$marks'}
        //     }
        // }
        
    ]).toArray();

    console.log(agg);
    res.send(agg)
}
module.exports={
    main:main
}