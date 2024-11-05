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
        {
            $project: {
                '_id':0,
                f_name:'$personalInfo.firstName',
                l_name:'$personalInfo.lastName',
                pointer:'$academicDetails.GPA',   //change academicDetails.GPA to pointer
                // courseourseGrade: { $arrayElemAt: ["$academicDetails.courses.grade", 0] },
                total_marks:{$sum:'$academicDetails.courses.marks'},
                percentage: {
                    $multiply: [
                        { $divide: [{ $sum: '$academicDetails.courses.marks' }, 400] },
                        100
                    ]
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