import { pool } from '../Config/DatabaseConfig.js'

export async function getAnswers() {
    const [result] = await pool.query('SELECT * FROM answers')
    return result
}

export async function uploadAnswers(questionnaire_id, question_id, answer){
    await pool.query('INSERT INTO answers(questionnaire_id, question_id, answer) VALUES (?, ?, ?)', [questionnaire_id, question_id, answer]);
}