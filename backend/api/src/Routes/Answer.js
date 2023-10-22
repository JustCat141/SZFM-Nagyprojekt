import express from 'express'
export const answerRouter = express.Router()

// Write your endpoints here...
answerRouter.get('/', async (req,res) => {
    res.send("This is a test message from the Answer Route").status(200)
})
