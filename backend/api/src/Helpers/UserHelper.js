import bcrypt from 'bcryptjs'

const costFactor = 10

export async function hash(obj) {
    const hash = bcrypt.hash(obj,costFactor)
    return hash
}

export async function verifyHash(obj, hash) {
    const result = bcrypt.compare(obj,hash)
    return result
}

// export async function verifyPasswordFormat() {
    
// }

// export async function verifyEmailFormat() {

// }

// export async function verifyPasswordFormat() {
    
// }