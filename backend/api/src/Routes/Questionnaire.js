import express from 'express'
import * as questionnaireController from '../Controllers/QuestionnaireController.js'

export const questionnaireRouter = express.Router()

// Write your endpoints here...
questionnaireRouter.get('/:id', questionnaireController.getQuestionnaire)
questionnaireRouter.get('/user/:userId', questionnaireController.getUserQuestionnaires)
questionnaireRouter.post('/create', questionnaireController.createQuestionnaire)

questionnaireRouter.delete('/:id', questionnaireController.deleteQuestionnaire)