import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "db",
  user: "root",
  password: "1234",
  database: "demo"
});

export default pool;
