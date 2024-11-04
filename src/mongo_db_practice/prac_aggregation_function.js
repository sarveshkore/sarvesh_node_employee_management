async function main(req,res){
    
    const { MongoClient } = require('mongodb');
    const url = 'mongodb://localhost:27017';
    const client = new MongoClient(url);

    await client.connect();
    console.log('Connected successfully to server');

    const db = client.db("sarvesh_db");
    const collection = db.collection('collection_practice');

    const agg= await collection.aggregate([
        // {
            
        //     $match:{'student_detail.educational_details.percentage': {$gte:87 } }
        // },
        {
            $project:{
                '_id':0,
                // 'student_detail.s_id':1,
                // 'student_detail.s_name':1,
                // 'student_detail.educational_details.school_name':1,
                // 'student_detail.educational_details.college_name':1,
                // 'student_detail.educational_details.university_name':1,
                // 'student_detail.educational_details.percentage':1,


            }
        },

        {
            $project: {
                '_id':0,
                'personalInfo.firstName':1,
                'personalInfo.lastName':1,
                'personalInfo.phone.mobile':1,
                'academicDetails.courses.courseName':1,
                'extracurricularActivities.activityName':1,
                'awards.awardName':1,
                'emergencyContact.contactPerson.relationship':1,
                'emergencyContact.alternateContact.phone':1,

            },
        }
    ]).toArray();

    console.log(agg);
    res.send(agg)
}
module.exports={
    main:main
}