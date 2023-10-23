import { pool } from '../Config/DatabaseConfig.js'

export async function getAnswers() {
    const [result] = await pool.query('SELECT * FROM answers')
    return result
}