import { pool } from '../Config/DatabaseConfig.js'

export async function getQuestionnaire(id) {
    const [result] = await pool.query('SELECT * FROM questionnaires WHERE id = ?', [id])
    return result[0]
}

export async function getUserQuestionnaires(userId) {
    const [result] = await pool.query('SELECT q.id, q.user_id, q.title, q.description, q.created_at FROM users u INNER JOIN questionnaires q ON u.id = q.user_id WHERE u.id = ?',[userId])
    return result
}