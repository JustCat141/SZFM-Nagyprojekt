import express from 'express'
import cors from 'cors'
import { pool } from './Config/DatabaseConfig.js'

// Import routes
import { userRouter } from './Routes/User.js'
import { questionnaireRouter } from './Routes/Questionnaire.js'
import { answerRouter } from './Routes/Answer.js'

const port = process.env.PORT

const app = express()
app.use(express.json())
app.use(cors())

// Connect routes to the app
app.use('/api/user', userRouter)
app.use('/api/questionnaire', questionnaireRouter)
app.use('/api/answer',answerRouter)

app.listen(port, () => {
    console.log("Server is running on port " + port)
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})