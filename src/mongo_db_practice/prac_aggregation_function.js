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

        //get all student f_name, l_name, total_marks, percentage 
        // {$unwind:'$academicDetails.courses'},
        // {
        //     $project: {
        //         '_id':0,
        //         f_name:'$personalInfo.firstName',
        //         l_name:'$personalInfo.lastName',
        //         courseName:'$academicDetails.courses.courseName',
        //         marks:'$academicDetails.courses.marks'
                
        //     }
        // },
        // {
        //     $group:{
        //         _id: {
        //             f_name: '$f_name', // Group by first name
        //             l_name: '$l_name'  // Include last name in the group
        //         },
        //         total_marks:{$sum:'$marks'}
        //     }
        // },
        // {
        //     $project: {
        //         _id: 0, 
        //         f_name: '$_id.f_name', // Include the first name from the grouped _id
        //         l_name: '$_id.l_name', // Include the last name from the grouped _id
        //         total_marks: '$total_marks' ,
        //         percentage: {
        //             $multiply: [ { $divide: ['$total_marks', 400] }, 100 ]
        //         }
        //     }
        // }

        //largest percentage in group
        {
            $unwind: '$academicDetails.courses' // Flatten the courses array
        },
        {
            $group: {
                _id: {
                    f_name: '$personalInfo.firstName', // Group by first name
                    l_name: '$personalInfo.lastName'    // Group by last name
                },
                total_marks: { $sum: '$academicDetails.courses.marks' } // Sum the marks
            }
        },
        {
            $project: {
                _id: 0, // Exclude the _id field
                f_name: '$_id.f_name', // Include first name
                l_name: '$_id.l_name', // Include last name
                total_marks: '$total_marks', // Include total_marks
                percentage: {
                    $multiply: [{ $divide: ['$total_marks', 400] }, 100] // Calculate percentage
                }
            }
        },
        {
            // $sort: { percentage: 1 }//ASCENDING ORDER
            $sort: { percentage: -1 }//DESCENDING ORDER

        },
        {
            $limit:1,
        }
        
    ]).toArray();

    console.log(agg);
    res.send(agg)
}
module.exports={
    main:main
}