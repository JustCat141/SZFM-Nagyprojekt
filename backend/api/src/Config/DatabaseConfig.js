import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config({ path: '../.env' });

export const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

pool.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to the database:', err.message);
        return;
    } else {
        console.log("Successfully connected to the database!")
    }
});