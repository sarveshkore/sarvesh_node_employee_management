async function main(req,res){
    
    const { MongoClient } = require('mongodb');
    const url = 'mongodb://localhost:27017';
    const client = new MongoClient(url);

    await client.connect();
    console.log('Connected successfully to server');

    const db = client.db("sarvesh_db");
    const collection = db.collection('collection_practice');

    // code for insert many in one document itself uses insert one nesting.
    // await collection.insertOne(
    //     student_detail : [
        await collection.insertOne({
            student_detail: [
            {
                s_id:'1',
                s_name:'sarvesh',
                city:'mumbai',
                educational_details:[
                    {school_name:'fatima high school',
                        percentage:90.5
                    },
                    {
                        college_name:'pune vidya bhavan',
                        percentage:85.5
                    },
                    {
                        university_name:'mumbai university',
                        percentage:79.5
                    }
                ],
                family_background:[
                    {
                        father_name:'khanderao kore',
                        father_occupation:'manager',
                        father_qualification:'bsc physics'
                    },
                    {
                        mother_name:'sulochana kore',
                        mother_occupation:'teacher',
                        mother_qualification:'bsc chemistry'
                    }
                ]
        
            },
            {
                s_id: '2',
                s_name: 'Aditi',
                city: 'Pune',
                educational_details: [
                    {school_name: 'St. Anne s School', percentage: 88.5},
                    {college_name: 'Fergusson College', percentage: 82.5},
                    {university_name: 'Pune University', percentage: 78.0}
                ],
                family_background: [
                    {father_name: 'Rajesh Deshmukh', father_occupation: 'Engineer', father_qualification: 'BE Mechanical'},
                    {mother_name: 'Smita Deshmukh', mother_occupation: 'Housewife', mother_qualification: 'BA Economics'}
                ]
            },
            {
                s_id: '3',
                s_name: 'Rahul',
                city: 'Hyderabad',
                educational_details: [
                    {school_name: 'Little Flower High School', percentage: 85.0},
                    {college_name: 'St. Mary s College', percentage: 80.0},
                    {university_name: 'Osmania University', percentage: 75.5}
                ],
                family_background: [
                    {father_name: 'Shyam Kumar', father_occupation: 'Doctor', father_qualification: 'MBBS'},
                    {mother_name: 'Anita Kumar', mother_occupation: 'Lecturer', mother_qualification: 'MA English'}
                ]
            },
            {
                s_id: '4',
                s_name: 'Sneha',
                city: 'Bangalore',
                educational_details: [
                    {school_name: 'Baldwin Girls High School', percentage: 87.2},
                    {college_name: 'Mount Carmel College', percentage: 83.4},
                    {university_name: 'Bangalore University', percentage: 77.3}
                ],
                family_background: [
                    {father_name: 'Kiran Rao', father_occupation: 'Businessman', father_qualification: 'BBA'},
                    {mother_name: 'Lata Rao', mother_occupation: 'Interior Designer', mother_qualification: 'BFA'}
                ]
            },
            {
                s_id: '5',
                s_name: 'Arjun',
                city: 'Chennai',
                educational_details: [
                    {school_name: 'SBOA School', percentage: 89.0},
                    {college_name: 'Loyola College', percentage: 84.8},
                    {university_name: 'Anna University', percentage: 80.2}
                ],
                family_background: [
                    {father_name: 'Suresh Iyer', father_occupation: 'Chartered Accountant', father_qualification: 'CA'},
                    {mother_name: 'Meera Iyer', mother_occupation: 'Bank Manager', mother_qualification: 'MBA'}
                ]
            },
            {
                s_id: '6',
                s_name: 'Vikram',
                city: 'Delhi',
                educational_details: [
                    {school_name: 'Delhi Public School', percentage: 92.3},
                    {college_name: 'Hindu College', percentage: 86.7},
                    {university_name: 'Delhi University', percentage: 81.9}
                ],
                family_background: [
                    {father_name: 'Ramesh Gupta', father_occupation: 'Government Officer', father_qualification: 'BA Political Science'},
                    {mother_name: 'Sunita Gupta', mother_occupation: 'Teacher', mother_qualification: 'BEd'}
                ]
            },
            {
                s_id: '7',
                s_name: 'Meena',
                city: 'Jaipur',
                educational_details: [
                    {school_name: 'Maharani Gayatri Devi School', percentage: 91.5},
                    {college_name: 'St. Xavier s College', percentage: 87.0},
                    {university_name: 'Rajasthan University', percentage: 82.5}
                ],
                family_background: [
                    {father_name: 'Vikram Singh', father_occupation: 'Lawyer', father_qualification: 'LLB'},
                    {mother_name: 'Rekha Singh', mother_occupation: 'Artist', mother_qualification: 'MA Fine Arts'}
                ]
            },
            {
                s_id: '8',
                s_name: 'Riya',
                city: 'Kolkata',
                educational_details: [
                    {school_name: 'Loreto Convent', percentage: 90.0},
                    {college_name: 'Jadavpur University', percentage: 84.2},
                    {university_name: 'Calcutta University', percentage: 80.8}
                ],
                family_background: [
                    {father_name: 'Arun Sen', father_occupation: 'Professor', father_qualification: 'PhD in Economics'},
                    {mother_name: 'Sharmila Sen', mother_occupation: 'Social Worker', mother_qualification: 'MSW'}
                ]
            },
            {
                s_id: '9',
                s_name: 'Rohit',
                city: 'Ahmedabad',
                educational_details: [
                    {school_name: 'Udgam School', percentage: 88.0},
                    {college_name: 'St. Xavier s College', percentage: 83.5},
                    {university_name: 'Gujarat University', percentage: 79.2}
                ],
                family_background: [
                    {father_name: 'Manoj Patel', father_occupation: 'Architect', father_qualification: 'BArch'},
                    {mother_name: 'Sangeeta Patel', mother_occupation: 'Homemaker', mother_qualification: 'BA History'}
                ]
            },
            {
                s_id: '10',
                s_name: 'Neha',
                city: 'Bhopal',
                educational_details: [
                    {school_name: 'Kendriya Vidyalaya', percentage: 91.2},
                    {college_name: 'Bhopal School of Social Sciences', percentage: 86.3},
                    {university_name: 'Barkatullah University', percentage: 81.0}
                ],
                family_background: [
                    {father_name: 'Mahesh Sharma', father_occupation: 'Civil Engineer', father_qualification: 'BE Civil'},
                    {mother_name: 'Anjali Sharma', mother_occupation: 'Lecturer', mother_qualification: 'MSc Physics'}
                ]
            }
        ]
    }
);
}
module.exports={
    main:main
}