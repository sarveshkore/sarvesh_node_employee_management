async function main(req,res){
    const { MongoClient,ObjectId } = require('mongodb');
    const url = 'mongodb://localhost:27017';
    const client = new MongoClient(url);

    await client.connect();
    console.log('Connected successfully to server');

    const db = client.db("sarvesh_db");
    const collection = db.collection('collection_practice');

    // await collection.insertOne({name:'new_data'});
    const data=req.body;
    const result = await collection.insertOne(data);

    
    
    
    // for(let i=0;i<=25;i++){
    //     await collection.insertOne(
            
        
            
    //     );
    // }


    // for (let i = 0; i < 25; i++) {
    //     db.collection("studentData").insertOne(generateRandomData());
    // }
    
    // function generateRandomData() {
    //     return {
    //         "personalInfo": {
    //             "firstName": `Name_${Math.floor(Math.random() * 1000)}`,
    //             "lastName": `Last_${Math.floor(Math.random() * 1000)}`,
    //             "email": `user${Math.floor(Math.random() * 10000)}@example.com`,
    //             "phone": {
    //                 "mobile": `+91-${Math.floor(1000000000 + Math.random() * 9000000000)}`,
    //                 "home": `+91-${Math.floor(1000000000 + Math.random() * 9000000000)}`
    //             },
    //             "address": {
    //                 "street": `${Math.floor(Math.random() * 1000)} Random St`,
    //                 "city": `City_${Math.floor(Math.random() * 100)}`,
    //                 "state": `State_${Math.floor(Math.random() * 100)}`,
    //                 "pinCode": `${Math.floor(100000 + Math.random() * 900000)}`,
    //                 "country": "Country_Random"
    //             },
    //             "dateOfBirth": `${2000 + Math.floor(Math.random() * 10)}-0${1 + Math.floor(Math.random() * 9)}-1${Math.floor(Math.random() * 9)}`
    //         },
    //         "academicDetails": {
    //             "enrollment": {
    //                 "studentId": `S${Math.floor(Math.random() * 100000)}`,
    //                 "program": `Program_${Math.floor(Math.random() * 100)}`,
    //                 "institution": `Institution_${Math.floor(Math.random() * 100)}`,
    //                 "startDate": `${2000 + Math.floor(Math.random() * 20)}-07-01`,
    //                 "expectedGraduationDate": `${2024 + Math.floor(Math.random() * 4)}-06-15`,
    //                 "status": "Active"
    //             },
    //             "GPA": (Math.random() * 10).toFixed(2),
    //             "courses": [
    //                 {
    //                     "courseId": `CSE${Math.floor(Math.random() * 100)}`,
    //                     "courseName": `Course_${Math.floor(Math.random() * 100)}`,
    //                     "credits": 4,
    //                     "grade": "A",
    //                     "marks": Math.floor(Math.random() * 100),
    //                     "semester": `${2020 + Math.floor(Math.random() * 4)}-1`
    //                 },
    //                 // Additional courses as needed...
    //             ]
    //         },
    //         "extracurricularActivities": [
    //             {
    //                 "activityName": `Activity_${Math.floor(Math.random() * 10)}`,
    //                 "position": "Member",
    //                 "yearsActive": [
    //                     {
    //                         "year": 2021,
    //                         "semester": "1"
    //                     }
    //                 ],
    //                 "achievements": [
    //                     `Achievement_${Math.floor(Math.random() * 100)}`,
    //                 ]
    //             }
    //         ],
    //         "awards": [
    //             {
    //                 "awardName": `Award_${Math.floor(Math.random() * 100)}`,
    //                 "year": 2022,
    //                 "details": `Details about the award ${Math.floor(Math.random() * 100)}`
    //             }
    //         ],
    //         "emergencyContact": {
    //             "contactPerson": {
    //                 "name": `Person_${Math.floor(Math.random() * 1000)}`,
    //                 "relationship": "Guardian",
    //                 "phone": `+91-${Math.floor(1000000000 + Math.random() * 9000000000)}`
    //             },
    //             "alternateContact": {
    //                 "name": `Person_${Math.floor(Math.random() * 1000)}`,
    //                 "relationship": "Guardian",
    //                 "phone": `+91-${Math.floor(1000000000 + Math.random() * 9000000000)}`
    //             }
    //         },
    //         "financialAid": {
    //             "scholarships": [
    //                 {
    //                     "name": `Scholarship_${Math.floor(Math.random() * 100)}`,
    //                     "amount": Math.floor(Math.random() * 50000),
    //                     "year": 2020
    //                 }
    //             ],
    //             "loans": [
    //                 {
    //                     "loanId": `L${Math.floor(Math.random() * 100000)}`,
    //                     "amount": Math.floor(Math.random() * 100000),
    //                     "provider": `Bank_${Math.floor(Math.random() * 100)}`,
    //                     "status": "Active"
    //                 }
    //             ]
    //         }
    //     };
    // }
    
    
    
    
    
    
    
    
    
    console.log('done');

    

    client.close();
}
module.exports={
    main:main
}