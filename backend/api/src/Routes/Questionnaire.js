import express from 'express'
export const questionnaireRouter = express.Router()

// Write your endpoints here...
questionnaireRouter.get('/', async (req,res) => {
    res.send("This is a test message from the Questionnaire Route").status(200)
})
