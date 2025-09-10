export interface QuestionObject {
    text : string;
    hasBeenChecked : boolean;
    answers : AnswerObject[];
}

export interface AnswerObject {
    text : string;
    isCorrect : boolean;
    isSelected : boolean;
}

export interface ErrorObject {
    severity ?: string;
    text ?: string;
}