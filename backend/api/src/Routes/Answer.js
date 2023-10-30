import express from 'express'
import * as answerController from '../Controllers/AnswerController.js'

export const answerRouter = express.Router()

// Write your endpoints here...
answerRouter.get('/',answerController.getAnswers)
