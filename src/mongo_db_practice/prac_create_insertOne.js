async function main(req, res) {
    const { MongoClient } = require('mongodb');
    const url = 'mongodb://localhost:27017';
    const client = new MongoClient(url);
    try {
        await client.connect();
        console.log('Connected successfully to server');
        
        const db = client.db("sarvesh_db");
        const collection = db.collection('collection_practice');
        
        // Insert 25 randomly generated documents
        for (let i = 0; i < 100; i++) {
            const randomData = generateRandomData();
            await collection.insertOne(randomData);
        }

        console.log('25 random documents inserted successfully');
        res.status(200).send('Random documents inserted successfully');
        
    } catch (err) {
        console.error(err);
        res.status(500).send('Error inserting documents');
    } finally {
        await client.close();
    }
    
    // Function to generate random data for each document
    function generateRandomData() {

        const student_data={
            firstName:["raj","viraj","sneh","ram","suyash","daksh","sainath","ayush","atharva","soham","tanmay","siddhesh","akinkya"],
            fatherName:["khanderao","pradeep","santosh","dilip","amol","abhishekh","shivshankar"],
            motherName:["rohini","sulakshana","kalpana","archana","priyanka","akshada","suman"],
            lastName:["singh","chaturvedi","shinde","chavan","kamthe","sarmalkar","patil","ninave","khochre","bargule"],
            program:["Bachelor of Technology in Computer Engineering","Bachelor of Technology in Information Technology"],
            courseName:["Introduction to programming","Data structure and algorithms","Database Management System", "Software Engineering" ],
            extracurricularActivities:["Hackthon","Coding Competition", "App Development Challenges", "Tech Fest"],
            relationship:["mother","father","gaurdian"],
            scholarship:["Google Anita Borg Memorial Scholarship","Microsoft Scholarship Program"],
            loanProvider:["State Bank Of India","Bank Of Baroda","Kotak Mahindra Bank"],
            loanStatus:["active","in-active"],
            state:["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal"],
            city: ["Visakhapatnam","Vijayawada","Itanagar","Tawang","Guwahati","Dibrugarh","Patna","Gaya","Raipur","Bhilai","Panaji","Margao","Ahmedabad","Surat","Gurgaon","Faridabad","Shimla","Manali","Ranchi","Jamshedpur","Bengaluru","Mysuru","Kochi","Thiruvananthapuram","Indore","Bhopal","Mumbai","Pune","Imphal","Bishnupur","Shillong","Tura","Aizawl","Lunglei","Kohima","Dimapur","Bhubaneswar","Cuttack","Amritsar","Ludhiana","Jaipur","Udaipur","Gangtok","Pelling","Chennai","Coimbatore","Hyderabad","Warangal","Agartala","Udaipur","Lucknow","Kanpur","Dehradun","Haridwar","Kolkata","Siliguri"],
            institute:["Indian Institute of Technology Bombay","Indian Institute of Technology Delhi","Indian Institute of Technology Madras","Indian Institute of Technology Kanpur","Indian Institute of Technology Kharagpur"],
            credit:["4","5"],
            grade:["O","A","A","B",+"B"],
            extracurricular_year:["2021","2022","2023","2024","2024"],
            semester:["1","2","3","4","5","6"],
            courseSem:["1","2","3","4","5","6"],
            awards :["Best Software Development Project","Outstanding Academic Achievement in Computer Science","Excellence in Artificial Intelligence Research","Top Innovator in Machine Learning","Best Capstone Project in IT"],
            achievements:[ "Volunteer of the Year Award","Best Debater in University Debate Championship","Captain of College Robotics Team","Top Presenter at Science and Innovation Expo","Organized Annual Tech Symposium","Selected for International Exchange Program"]       
        };

        const firstName = student_data.firstName[Math.floor(Math.random() * student_data.firstName.length)];
        const lastName = student_data.lastName[Math.floor(Math.random() * student_data.lastName.length)];
        const city = student_data.city[Math.floor(Math.random() * student_data.city.length)];
        const state = student_data.state[Math.floor(Math.random() * student_data.state.length)];
        const program = student_data.program[Math.floor(Math.random() * student_data.program.length)];
        const institute = student_data.institute[Math.floor(Math.random() * student_data.institute.length)];
        const courseName = student_data.courseName[Math.floor(Math.random() * student_data.courseName.length)];
        const fatherName = student_data.fatherName[Math.floor(Math.random() * student_data.fatherName.length)];
        const motherName = student_data.motherName[Math.floor(Math.random() * student_data.motherName.length)];
        const extracurricularActivities = student_data.extracurricularActivities[Math.floor(Math.random() * student_data.extracurricularActivities.length)];
        const relationship = student_data.relationship[Math.floor(Math.random() * student_data.relationship.length)];
        const scholarship = student_data.scholarship[Math.floor(Math.random() * student_data.scholarship.length)];
        const loanProvider = student_data.loanProvider[Math.floor(Math.random() * student_data.loanProvider.length)];
        const loanStatus = student_data.loanStatus[Math.floor(Math.random() * student_data.loanStatus.length)];
        const awards = student_data.awards[Math.floor(Math.random() * student_data.awards.length)];
        const achievements = student_data.achievements[Math.floor(Math.random() * student_data.achievements.length)];
        const courseSem = student_data.courseSem[Math.floor(Math.random() * student_data.courseSem.length)];
        const grade = student_data.grade[Math.floor(Math.random() * student_data.grade.length)];
        const credit = student_data.credit[Math.floor(Math.random() * student_data.credit.length)];
        const extracurricular_year = student_data.extracurricular_year[Math.floor(Math.random() * student_data.extracurricular_year.length)];
        const semester = student_data.semester[Math.floor(Math.random() * student_data.semester.length)];
        
        return {
            "personalInfo": {
                "firstName": firstName,
                "lastName": lastName,
                "email": `user${Math.floor(Math.random() * 10000)}@example.com`,
                "phone": {
                    "mobile": `+91-${Math.floor(1000000000 + Math.random() * 9000000000)}`,
                    "home": `+91-${Math.floor(1000000000 + Math.random() * 9000000000)}`
                },
                "address": {
                    "city": city,
                    "state": state,
                    "pinCode": `${Math.floor(100000 + Math.random() * 900000)}`,
                    "country": "India"
                },
                "dateOfBirth": `${2000 + Math.floor(Math.random() * 2)}-0${1 + Math.floor(Math.random() * 9)}-1${Math.floor(Math.random() * 9)}`
            },
            "academicDetails": {
                "enrollment": {
                    "studentId": `S${Math.floor(Math.random() * 100000)}`,
                    "program": program,
                    "institution": institute,
                    "startDate": `${2020 + Math.floor(Math.random() * 2)}-07-01`,
                    "expectedGraduationDate": `${2023 + Math.floor(Math.random() * 2)}-06-15`,
                    "status": "Active"
                },
                "GPA": (Math.random() * 10).toFixed(2),
                "courses": [
                    {
                        "courseId": 'DEV1101',
                        "courseName":'Introduction to Programming',
                        "credits": student_data.credit[Math.floor(Math.random() * student_data.credit.length)],
                        "grade": student_data.grade[Math.floor(Math.random() * student_data.grade.length)],
                        "marks": Math.floor(Math.random() * 100),
                        "semester": 1
                    },
                    {
                        "courseId": 'DEV1102',
                        "courseName":'Database Management System',
                        "credits": student_data.credit[Math.floor(Math.random() * student_data.credit.length)],
                        "grade": student_data.grade[Math.floor(Math.random() * student_data.grade.length)],
                        "marks": Math.floor(Math.random() * 100),
                        "semester": 1
                    },
                    {
                        "courseId": 'DEV1103',
                        "courseName":'Data Structure and Algorithms',
                        "credits": student_data.credit[Math.floor(Math.random() * student_data.credit.length)],
                        "grade": student_data.grade[Math.floor(Math.random() * student_data.grade.length)],
                        "marks": Math.floor(Math.random() * 100),
                        "semester": 1
                    },
                    {
                        "courseId": 'DEV1104',
                        "courseName":'Software Engineering',
                        "credits": student_data.credit[Math.floor(Math.random() * student_data.credit.length)],
                        "grade": student_data.grade[Math.floor(Math.random() * student_data.grade.length)],
                        "marks": Math.floor(Math.random() * 100),
                        "semester": 1
                    },
                ]
            },
            "extracurricularActivities": [
                {
                    "activityName": student_data.extracurricularActivities[Math.floor(Math.random() * student_data.extracurricularActivities.length)],
                    // "position": "Member",
                    "yearsActive": [
                        {
                            "year": 2021,
                            "semester":1
                        }
                    ],
                    "achievements": student_data.achievements[Math.floor(Math.random() * student_data.achievements.length)]
                },
                {
                    "activityName": student_data.extracurricularActivities[Math.floor(Math.random() * student_data.extracurricularActivities.length)],
                    // "position": "Member",
                    "yearsActive": [
                        {
                            "year": 2022,
                            "semester":1
                        }
                    ],
                    "achievements": student_data.achievements[Math.floor(Math.random() * student_data.achievements.length)]
                }
            ],
            "awards": [
                {
                    "awardName": student_data.awards[Math.floor(Math.random() * student_data.awards.length)],
                    "year": extracurricular_year,
                    "details": `Details about the award`
                }
            ],
            "emergencyContact": {
                "contactPerson": {
                    "name": fatherName,
                    "relationship": "Father",
                    "phone": `+91-${Math.floor(1000000000 + Math.random() * 9000000000)}`
                },
                "alternateContact": {
                    "name": motherName,
                    "relationship": "Mother",
                    "phone": `+91-${Math.floor(1000000000 + Math.random() * 9000000000)}`
                }
            },
            "financialAid": {
                "scholarships": [
                    {
                        "name": "Google Anita Borg Memorial Scholarship",
                        "amount": Math.floor(Math.random() * 50000),
                        "year": extracurricular_year
                    },
                    {
                        "name": "Microsoft Scholarship Program",
                        "amount": Math.floor(Math.random() * 50000),
                        "year": extracurricular_year
                    }
                ],
                "loans": [
                    {
                        "loanId": `L${Math.floor(Math.random() * 100000)}`,
                        "amount": Math.floor(Math.random() * 100000),
                        "provider": "Kotak Mahindra Bank",
                        "status": loanStatus
                    } 
                ]
            }
        };
    }
}

module.exports = {
    main: main
};
