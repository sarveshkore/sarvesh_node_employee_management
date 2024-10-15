async function main(req, res) {
    const { get_pg_connection } = require('../base/pg_connector');
    let client = await get_pg_connection();

    // Query to select and sort the students by s_id in descending order
    const result = await client.query('SELECT * FROM student ORDER BY s_id asc', [], function(err, data) {
        if (err) {
            console.log("Error", err);
            // Send an error response
            return res.status(500).send(`ERROR in fetching data: ${err.message}`);
        } else {
            console.log(data.rows, 'Fetched and sorted data successfully');
            // Send the sorted data as response
            res.send(data.rows);
        }
        // Close the database connection
        client.end();
    });
}

module.exports = {
    main
};
