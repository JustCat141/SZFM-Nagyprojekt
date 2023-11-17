import * as answerService from '../Services/AnswerService.js'

export const getAnswers = async (req, res) => {
    const answers = await answerService.getAnswers()
    res.status(200).send(answers)
}

export const uploadAnswers = async (req, res) => {
    try{
        const { questionnaire_id, question_id, answer } = req.body;

        await answerService.uploadAnswers(questionnaire_id, question_id, answer);
        return res.status(201).send(rh.success);
    } catch (err) {
        return res.sendStatus(500)
    }
}

