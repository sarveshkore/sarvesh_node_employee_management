async function main(req, res) {
    const { get_pg_connection } = require('../base/pg_connector');
    let client = await get_pg_connection();

    const result = await client.query('SELECT * FROM student ORDER BY s_id asc', [], function(err, data) {
        if (err) {
            console.log("Error", err);
            return res.status(500).send(`ERROR in fetching data: ${err.message}`);
        } else {
            console.log(data.rows, 'Fetched and sorted data successfully');
            res.send(data.rows);
        }
        client.end();
    });
}

module.exports = {
    main
};
