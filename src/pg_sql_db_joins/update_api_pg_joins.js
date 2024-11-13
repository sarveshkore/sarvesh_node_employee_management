async function main(req, res) {

    
    const s_id = req.params.id; 
    const {s_name,location_id}=req.body;
    console.log('load');
    
    
    const{get_pg_connection}=await require('./../base/pg_connector');
    const client =await  get_pg_connection();
    console.log(client);
    
    console.log('Connecting to client...');

    console.log("Connected to the database");

    try {
        const result = await client.query('update student_data set s_name=$2 , location_id=$3  where s_id=$1 ', [s_id, s_name, location_id] );
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

