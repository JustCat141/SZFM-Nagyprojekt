import { pool } from '../Config/DatabaseConfig.js'

export async function getUsers() {
    const [result] = await pool.query('SELECT * FROM users')
    return result
}

export async function getUser(id) {
    const [result] = await pool.query('SELECT * FROM users WHERE id = ?', [id])
    return result[0]
}

export async function getUserByEmail(emailHash) {
    const [result] = await pool.query('SELECT * FROM users WHERE email = ?', [emailHash])
    if(result == []) {
        return undefined
    } else {
        return result[0]
    }
}

export async function createUser(username, emailHash, passwordHash) {
    await pool.query('INSERT INTO users(username, email, password) VALUES(?, ?, ?)', [username, emailHash, passwordHash])
}