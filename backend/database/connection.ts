import knex from "knex"
const connection = knex({
client: "mysql",
connection: {
host: "localhost",
user: "root",
password: "",
database: "sicem"
},
useNullAsDefault: true
})
export default connection
