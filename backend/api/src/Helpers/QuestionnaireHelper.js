import Ajv from 'ajv'

const questionnaireSchema = {
    "type": "array",
    "items": {
        "type": "object",
        "properties": {
            "q_id": {
                "type": "integer"
            },
            "type": {
                "type": "string"
            },
            "title": {
                "type": "string"
            },
            "description": {
                "type": ["string", "null"]
            },
            "answers": {
                "type": "array",
                "items": {
                    "type": "string"
                }
            }
        },
        "required": ["q_id", "type", "title", "answers"]
    }
}


const ajv = new Ajv()
const validator = await ajv.compile(questionnaireSchema)

export async function isValidDataStructure(questionnaire) {
    const isValid = await validator(questionnaire)
    return isValid
}