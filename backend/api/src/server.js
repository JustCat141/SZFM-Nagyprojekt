import express from 'express'
import cors from 'cors'
import { logger } from './Helpers/Logger.js'

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

logger.info("Starting server...")
app.listen(port, () => {
    logger.info("Server started successfully! Running on port " + port+"!")
})

app.use((err, req, res, next) => {
    logger.error(err.stack)
    res.status(500).send('Something broke!')
})