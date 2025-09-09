export interface AnswerObject {
  text: string;
  isCorrect: boolean;
}

export interface QuestionObject {
  text: string;
  answers: AnswerObject[];
}
