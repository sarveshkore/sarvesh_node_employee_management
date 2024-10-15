// // // students table name
// // async function main(req,res){
// //     // const {id,rollno,name,city} = req.body;
// //     const pg = require("pg");
// //     const { Client } = pg;
// //     const x={
// //         user: 'postgres',
// //         password: 'root',
// //         host: 'localhost',
// //         port: 5432,
// //         database: 'node_project_db',
// //     };
// //     const client = new Client(x);
// //     const { s_id, s_name, city } = req.body;

// //     console.log('client')
// //     // try {
        
// //     //     await client.connect();
// //     // } 
// //     try {
// //         // Proper UPDATE query syntax
// //         const query = 'UPDATE student SET s_name = $2, city = $3 WHERE s_id = $1';
// //         const values = [s_id, s_name, city];

// //         // Execute the query
// //         const result = await client.query(query, values);

// //         // If no rows were updated
// //         if (result.rowCount === 0) {
// //             return res.status(404).send(`No student found with ID: ${s_id}`);
// //         }
// //     catch (error) {
// //         console.log(error);
        
// //     }
// //     console.log("done");
    
// // //    const result= await client.query('update INTO student(s_id,s_name,city) VALUES($1,$2,$3)', ['5','sanedt','mumbai']
// //     const result= await client.query('update student(s_id) set $1 where $1=3', ['5','sanedt','mumbai']

// //         ,function(err,data){
// //         if(err){
// //             console.log("Error",err);
// //             res.send(`ERROR in inserting the vlaue:-  ${err}`);
// //         } else{
// //             console.log(data.rows,'Created');
// //             // res.send(data.rows);
// //             console.log('run');
            
// //             res.send("Value Inserted Sucessfully!!");
// //         }
// //          client.end();
// //     }
// // );
// // // await client.end()
// // res.send('result')
// //     // console.log(result);
// // }
// // module.exports={
// //     main
// // }


// async function main(req, res) {
//     const pg = require("pg");
//     const { Client } = pg;
//     const x = {
//         user: 'postgres',
//         password: 'root',
//         host: 'localhost',
//         port: 5432,
//         database: 'node_project_db',
//     };
//     const client = new Client(x);

//     // Extracting values from req.body
//     const { s_id, s_name, city } = req.body;

//     console.log('client');
//     try {
//         await client.connect();
//     } catch (error) {
//         console.log(error);
//         return res.status(500).send(`Error connecting to the database: ${error}`);
//     }
    
//     console.log("Connected to the database");

//     try {
//         // Proper UPDATE query syntax
//         // const query = 'UPDATE student SET s_name = $2, city = $3 WHERE s_id = $1';
//         // const values = [s_id, s_name, city];

//         const query = 'UPDATE student SET s_name = $2, city = $3 WHERE s_id = $1';
//         const values = [s_id, s_name, city];


//         // Execute the query
//         const result = await client.query(query, values);

//         // If no rows were updated
//         if (result.rowCount === 0) {
//             return res.status(404).send(`No student found with ID: ${s_id}`);
//         }

//         console.log('Record updated successfully');
//         res.send("Student information updated successfully!");
//     } catch (err) {
//         console.log("Error during query execution:", err);
//         res.status(500).send(`Error updating student information: ${err}`);
//     } finally {
//         client.end();
//     }
// }

// module.exports = {
//     main
// };



async function main(req, res) {

    // Extract values from req.body and req.params
    const s_id = req.params.id; // Assuming s_id is coming from the URL
    const { s_name, city, marks, misc } = req.body; // Other values from request body
    console.log('load');
    
    console.log(s_name,city ,s_id );
    const{get_pg_connection}=await require('./../base/pg_connector');
    const client =await  get_pg_connection();
    console.log(client);
    
    console.log('Connecting to client...');

    // try {
    //     await client.connect();
    // } catch (error) {
    //     console.error('Error connecting to the database:', error);
    //     return res.status(500).send(`Database connection error: ${error.message}`);
    // }

    console.log("Connected to the database");

    try {
        // const queries = 'UPDATE student SET s_name = $2, city = $3, marks=$4 WHERE s_id = $1';
        // const values = [s_id, s_name, city, marks];
        const queries = 'UPDATE student SET marks=$2, misc=$3 WHERE s_id = $1';
        const values = [s_id, marks, misc];
        // Execute the query
        const result = await client.query(queries, values);

        // Check if a record was updated
        if (result.rowCount === 0) {
            return res.status(404).send(`No student found with ID: ${s_id}`);
        }

        console.log('Record updated successfully');
        client.end();
        res.send("Student information updated successfully!");
    } catch (err) {
        console.error("Error during query execution:", err);
        res.status(500).send(`Error updating student information: ${err.message}`);
    } 
}

module.exports = { main };

// async function main(req,res){
//     // const{id}=req.params.id
//     console.log('he');
//     const {s_name}=req.body;
    
//     console.log(s_name);
    
//     const {get_pg_connection}=require('../base/pg_connector');
//     let  client=await get_pg_connection();
//     const result= await client.query('INSERT INTO student(s_id,s_name,city) VALUES($1,$2,$3)', [id,name,city],
//         function (err,data){
//         if(err){
//             console.log("Error",err);
//             res.send(`ERROR in inserting the vlaue:-  ${err}`);
//         } else{
//             console.log(data.rows,'Created');
//             res.send("Value Inserted Sucessfully!!");
//         }
//          client.end();
//     }
// );

// }
// module.exports={
//     main
// }

