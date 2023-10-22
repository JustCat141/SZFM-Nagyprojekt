import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config({ path: '../.env' })

const app = express()
app.use(express.json())
app.use(cors())

const port = process.env.PORT

app.listen(port, () => {
    console.log("Server is running on port " + port)
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})