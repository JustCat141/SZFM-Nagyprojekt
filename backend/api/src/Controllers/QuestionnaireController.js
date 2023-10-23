import * as questionnaireService from '../Services/QuestionnaireService.js'

export const getQuestionnaire = async (req,res) => {
    const id = req.params.id
    const questionnaire = await questionnaireService.getQuestionnaire(id)
    res.status(200).send(questionnaire)
}

export const getUserQuestionnaires = async (req,res) => {
    const userId = req.params.userId
    const questionnaires = await questionnaireService.getUserQuestionnaires(userId)
    res.status(200).send(questionnaires)
}