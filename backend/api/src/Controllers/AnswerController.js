import * as answerService from '../Services/AnswerService.js'

export const getAnswers = async (req, res) => {
    const answers = await answerService.getAnswers()
    res.status(200).send(answers)
}