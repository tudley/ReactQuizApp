<<<<<<< HEAD
export interface AnswerObject {
  text: string;
  isCorrect: boolean;
}

export interface QuestionObject {
  text: string;
  answers: AnswerObject[];
}
=======
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
>>>>>>> 0d8201742f3929e2054592af0ac1d48e60adbce4
