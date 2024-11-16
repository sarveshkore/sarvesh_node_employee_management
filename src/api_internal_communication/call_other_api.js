const { MongoClient } = require('mongodb');
const { Client } = require('node-rest-client');
const rest = new Client();

async function main(req, res) {
    const url = 'mongodb://localhost:27017';
    const client = new MongoClient(url);
    
    let res_data = {};

    await client.connect();
    console.log('Connected successfully to server');

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
        const results = await Promise.all(apiCalls);
        
        results.forEach(result => {
            Object.assign(res_data, result);
        });

        res.send(res_data);
    } catch (error) {
        console.error('Error in API calls:', error);
        res.status(500).send({ error: 'Failed to retrieve data from APIs' });
    } finally {
        await client.close();
    }
}

module.exports = {
    main: main
};
