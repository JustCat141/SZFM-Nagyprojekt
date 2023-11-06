import express from 'express'
import * as answerController from '../Controllers/AnswerController.js'

export const answerRouter = express.Router()

// Write your endpoints here...
answerRouter.get('/',answerController.getAnswers)

//new route to upload answers
answerRouter.post('/upload', answerController.uploadAnswers)

//new route to evaluate the answers
