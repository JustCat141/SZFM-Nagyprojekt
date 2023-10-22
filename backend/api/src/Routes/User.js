import express from 'express'
export const userRouter = express.Router()

// Write your endpoints here...
userRouter.get('/', async (req,res) => {
    res.send("This is a test message from the User Route").status(200)
})
