import express from 'express'
import cors from 'cors'
import { pool } from './Config/DatabaseConfig.js'

const port = process.env.PORT

const app = express()
app.use(express.json())
app.use(cors())

app.listen(port, () => {
    console.log("Server is running on port " + port)
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.get('/', async (req,res) => {
    const [data] = await pool.query('SELECT * FROM users')
    res.status(200).send(data)
})