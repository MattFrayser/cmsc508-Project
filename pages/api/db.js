import mysql from 'mysql2/promise';

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DB
};

let connection;

export async function getDbConnection() {
  if (!connection) {
    connection = await mysql.createConnection(dbConfig);
    console.log("Database connection established");
  }
  return connection;
}

export async function closeDbConnection() {
  if (connection) {
    await connection.end();
    console.log("Database connection closed");
    connection = null; 
  }
}