import { pool } from '../Config/DatabaseConfig.js'

export async function getUsers() {
    const [result] = await pool.query('SELECT * FROM users')
    return result
}

export async function getUser(id) {
    const [result] = await pool.query('SELECT * FROM users WHERE id = ?', [id])
    return result[0]
}