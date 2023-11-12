import mysql from 'mysql2'
import dotenv from 'dotenv'
import { logger } from '../Helpers/Logger.js'

const result = dotenv.config({ path: '../.env' });

if(result.error) {
    logger.error("Error! Unable to load .env file! Process terminated.")
    process.exit()
}
logger.info("Connecting to MySQL database...")

export const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

try {
    const connection = await pool.getConnection()
    logger.info("Successfully connected to the database!")
    connection.release()
} catch (err) {
    logger.error(err)
    throw new Error(err)
}