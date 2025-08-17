export interface QuestionObject {
    text : string,
    answers : AnswerObject[]
}

export interface AnswerObject {
    text : string,
    isCorrect : boolean
}