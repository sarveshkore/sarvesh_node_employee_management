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
        {
            $group:{
                _id: {
                    f_name: '$f_name', // Group by first name
                    l_name: '$l_name'  // Include last name in the group
                },
                total_marks:{$sum:'$marks'}
            }
        },
        {
            $project: {
                _id: 0, 
                f_name: '$_id.f_name', // Include the first name from the grouped _id
                l_name: '$_id.l_name', // Include the last name from the grouped _id
                total_marks: '$total_marks' ,
                percentage: {
                    $multiply: [ { $divide: ['$total_marks', 400] }, 100 ]
                }
            }
        }


        
    ]).toArray();

    console.log(agg);
    res.send(agg)
}
module.exports={
    main:main
}