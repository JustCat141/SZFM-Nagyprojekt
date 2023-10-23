import { pool } from '../Config/DatabaseConfig.js'

export async function getQuestionnaire(id) {
    const [result] = await pool.query('SELECT * FROM questionnaires WHERE id = ?', [id])
    return result[0]
}