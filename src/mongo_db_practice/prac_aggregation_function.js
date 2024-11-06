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
        // {
        //     $unwind: '$academicDetails.courses' 
        // },
        // {
        //     $group: {
        //         _id: {
        //             f_name: '$personalInfo.firstName', 
        //             l_name: '$personalInfo.lastName'    
        //         },
        //         total_marks: { $sum: '$academicDetails.courses.marks' }, 
        //         maxMarks:{$max:'$academicDetails.courses.marks'}
        //     }
        // },
        // {
        //     $project: {
        //         _id: 0, 
        //         f_name: '$_id.f_name', 
        //         l_name: '$_id.l_name', 
        //         total_marks: '$total_marks', 
        //         maxMarks:'$maxMarks',
        //         percentage: {
        //             $multiply: [{ $divide: ['$total_marks', 400] }, 100] 
        //         }
        //     }
        // },
        // {
        //     $sort: { percentage: -1 }
        // },
        // {
        //     $limit:1,
        // }
        
                    //count of A grade in document
        // {
        //     $unwind:'$academicDetails.courses'
        // },
        // {
        //     $match: { 'academicDetails.courses.grade': { $in: ['A'] } }
        // },
        // {
        //     $project:{
        //         _id:0,
        //         firstName:'$personalInfo.firstName',
        //         lastName:'$personalInfo.lastName',
        //         courseName:'$academicDetails.courses.courseName',
        //         grade:'$academicDetails.courses.grade',

        //     }
        // },
        // {
        //     $count:'A'
        // }

                        //student wise count of A grade in documents
        // {
        //     $unwind: '$academicDetails.courses'
        // },
        // {
        //     $match: { 'academicDetails.courses.grade': 'A' }  // Filter for grade "A"
        // },
        // {
        //     $group: {
        //         _id: '$personalInfo.firstName',  // Group by first name
        //         a_count: { $sum: 1 }  // Count the occurrences of "A"
        //     },
        // },
        // {
        //     $project: {
        //         _id: 0,
        //         firstName: '$_id',  // Include the first name in the output
        //         A_grade: '$a_count'    // Rename the count field
        //     }
        // }

                    //find sum of fianancial aid to students
        {    
            $unwind:'$financialAid.loans',
        },
        {
            $project:{
                _id:0,
                name:'$personalInfo.firstName',
                loan_amount:'$financialAid.loans.amount'
            }
        },
        {
            $group:{
                _id:0,
                loanAmount:{$sum:'$loan_amount'}
            }
        },
        {
            $project:{
                _id:'$name',
                'Total Loan Amount': '$loanAmount'
            }
        }

    ]).toArray();

    console.log(agg);
    res.send(agg)
}
module.exports={
    main:main
}