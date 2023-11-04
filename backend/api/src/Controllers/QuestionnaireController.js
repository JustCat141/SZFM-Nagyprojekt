import * as questionnaireService from '../Services/QuestionnaireService.js'
import * as questionnaireHelper from '../Helpers/QuestionnaireHelper.js'
import * as rh from '../Helpers/ResponseHelper.js'
import { logger } from '../Helpers/Logger.js'

export const getQuestionnaire = async (req,res) => {
    try {
        const id = req.params.id
        const questionnaire = await questionnaireService.getQuestionnaire(id)
        res.status(200).send(questionnaire)
    } catch(err) {
        logger.error(err)
        return res.sendStatus(500)
    }
}

export const getUserQuestionnaires = async (req, res) => {
    try {
        const userId = req.params.userId
        const questionnaires = await questionnaireService.getUserQuestionnaires(userId)
        res.status(200).send(questionnaires)
    } catch (err) {
        logger.error(err)
        return res.sendStatus(500)
    }
}

export const createQuestionnaire = async (req, res) => {
    try {
        const questionnaire = req.body
        const { user_id, title, description, questions } = questionnaire
        const isValid = await questionnaireHelper.isValidDataStructure(questions)
        
        if (!isValid) {
            return res.status(400).send(rh.invalidFormat)
        }
        
        const questionsJSON = JSON.stringify(questions)

        await questionnaireService.createQuestionnaire(user_id, title, description, questionsJSON)
        return res.sendStatus(200)
    } catch (err) {
        logger.error(err)
        return res.sendStatus(500)
    }
}