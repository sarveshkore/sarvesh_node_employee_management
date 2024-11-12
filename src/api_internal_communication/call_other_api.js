// var Client = require('node-rest-client').Client;
// async function main(req,res){
//     const { MongoClient } = require('mongodb');
//     const url = 'mongodb://localhost:27017';
//     const client = new MongoClient(url);
//     var rest = new Client();
//     // var arr=[]
//     // var x=[]
//     // var y=[]
//     // await client.connect();
//     // console.log('Connected successfully to server');
    
//     // await rest.get('http://localhost:9998/file_system/read_file_async',(main_data,data)=>{
//     //     // console.log(data);
//     //     //  arr.push(main_data)
//     //     // res.send(main_data)
//     //     if(main_data){

//     //         x.push(main_data)
//     //         arr.push(x);
//     //     }
//     //     })
//     //     // arr.push(a);

//     // // await rest.get('http://localhost:9998/api/mongo_db_practice/prac_aggregation_function/',(main_data,data)=>{
//     // //         // console.log(data);
//     // //         if(main_data){
//     // //             y.push(main_data)
//     // //         arr.push(y);
//     // //         }
//     // //         // arr.push(main_data)
//     // //         // res.send(main_data)
//     // // })
//     // // arr.push(b);

//     // if (arr.length!=0) {
//     //     console.log(arr)
        
//     //     res.send(arr)
//     // }


//     let counter=2;
//     let res_data={};
//     rest.get('http://localhost:9998/file_system_practice/prac_read_file_async/',(data,res)=()=>{
//         res_data.read_file=data;
//         counter--;
//         if(counter==0){
//             res.send(res_data)
//         }
//     })


// }
// module.exports={
//     main:main
// }

const { MongoClient } = require('mongodb');
const { Client } = require('node-rest-client');
const rest = new Client();

async function main(req, res) {
    const url = 'mongodb://localhost:27017';
    const client = new MongoClient(url);
    
    let res_data = {};

    // Connect to MongoDB
    await client.connect();
    console.log('Connected successfully to server');

    // Define API call promises
    const apiCalls = [
        new Promise((resolve, reject) => {
            rest.get('http://localhost:9998/file_system/read_file_async', (data, response) => {
                if (data) {
                    resolve({ read_file: data });
                } else {
                    reject('Error in fetching data from read_file_async API');
                }
            });
        }),
        new Promise((resolve, reject) => {
            rest.get('http://localhost:9998/api/mongo_db_practice/prac_aggregation_function', (data, response) => {
                if (data) {
                    resolve({ aggregation_result: data });
                } else {
                    reject('Error in fetching data from prac_aggregation_function API');
                }
            });
        })
    ];

    try {
        // Wait for both API calls to complete
        const results = await Promise.all(apiCalls);
        
        // Combine results into res_data
        results.forEach(result => {
            Object.assign(res_data, result);
        });

        // Send the combined data as the response
        res.send(res_data);
    } catch (error) {
        console.error('Error in API calls:', error);
        res.status(500).send({ error: 'Failed to retrieve data from APIs' });
    } finally {
        // Close the MongoDB connection
        await client.close();
    }
}

module.exports = {
    main: main
};
