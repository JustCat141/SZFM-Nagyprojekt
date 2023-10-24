import mysql from 'mysql2'
import dotenv from 'dotenv'

const result = dotenv.config({ path: '../.env' });

if(result.error) {
    console.error("Error! Unable to load .env file! Process terminated.")
    process.exit()
}

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