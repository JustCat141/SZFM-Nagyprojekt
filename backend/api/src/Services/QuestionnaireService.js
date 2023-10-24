import { pool } from '../Config/DatabaseConfig.js'

export async function getQuestionnaire(id) {
    const [result] = await pool.query('SELECT * FROM questionnaires WHERE id = ?', [id])
    return result[0]
}

export async function getUserQuestionnaires(userId) {
    const [result] = await pool.query('SELECT q.id, q.user_id, q.title, q.description, q.questions, q.created_at FROM users u INNER JOIN questionnaires q ON u.id = q.user_id WHERE u.id = ?',[userId])
    return result
}

export async function createQuestionnaire(user_id,title,description,questions) {
    await pool.query('INSERT INTO questionnaires(user_id, title, description, questions) VALUES(?, ?, ?, ?)', [user_id, title, description, questions])
}