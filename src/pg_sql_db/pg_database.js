const pg = require("pg");
async function main() {
    const { Client } = pg;
 
const client = new Client({
  user: 'user_sarvesh',
  password: 'root',
  host: 'localhost',
  port: 5432,
  database: 'node_project_db',
})

await client.connect();
 
const result = await client.query('SELECT * FROM students', []);
console.log(result);
console.log(result.rows);
 
await client.end();
}
main();

module.exports={
    main
}




















// const { Client } = pg
// const client = new Client()
// await client.connect()
 
// const res = await client.query('SELECT $1::text as message', ['Hello world!'])
// console.log(res.rows[0].message) // Hello world!
// await client.end()